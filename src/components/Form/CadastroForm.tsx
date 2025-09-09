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
import Link from "next/link";

const formSchema = z.object({
  login: z.string().min(2).max(50),
  password: z.string().min(6).max(30),
});

export default function CadastroForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.post("/api/user/cadastro", values);
      router.push("/dashboard");
    } catch (error) {
      form.setError("root", {
        type: "manual",
        message: "Erro durante o cadastro",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-3 max-w-[400px]"
      >
        <FormField
          control={form.control}
          name="login"
          render={({ field }) => <FormItem placeholder="Login" {...field} />}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem placeholder="Senha" type="password" {...field} />
          )}
        />

        {form.formState.errors.root && (
          <div className="text-red-500 text-sm">
            {form.formState.errors.root.message}
          </div>
        )}
        <div className="space-y-1">
          <Button type="submit">Cadastrar</Button>

          <div className="flex flex-row justify-end *:text-xs">
            {/* <p>Esqueceu sua senha?</p> */}
            <Link href="/login">Voltar</Link>
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
