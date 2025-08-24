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

const formSchema = z.object({
  login: z.string().min(2).max(50),
  password: z.string().min(6).max(30),
});

export default function CadastroForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
        <Button type="submit">Cadastrar</Button>
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
