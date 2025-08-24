import { LoginForm } from "@/components/Form";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col px-8 justify-center items-center bg-gray min-h-screen w-full">
      <Image
        src="/logo_finnova.svg"
        alt="Logo Finnova"
        width={200}
        height={200}
      />
      <LoginForm />
    </div>
  );
}
