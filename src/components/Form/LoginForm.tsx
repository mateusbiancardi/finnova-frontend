"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem as FItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Button from "../Button/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Link from "next/link";

const formSchema = z.object({
  login: z.string().min(2).max(50),
  password: z.string().min(6).max(30),
});

export default function LoginForm() {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["authToken"]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await axios.post("/api/user/login", values);

    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        <FormField
          control={form.control}
          name="login"
          render={({ field }) => <FormItem placeholder="Login" {...field} />}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => <FormItem placeholder="Senha" {...field} />}
        />
        <div className="space-y-1">
          <Button type="submit">Entrar</Button>
          <div className="flex flex-row justify-between *:text-xs">
            {/* <p>Esqueceu sua senha?</p> */}
            <Link href="/cadastro">Criar conta</Link>
          </div>
        </div>
      </form>
    </Form>
  );
}

function FormItem({
  placeholder,
  ...field
}: { placeholder: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FItem>
      <FormControl>
        <Input
          className="bg-white p-4 w-full rounded-sm"
          placeholder={placeholder}
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FItem>
  );
}
