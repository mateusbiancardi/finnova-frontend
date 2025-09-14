import Button from "../Button/Button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";

export default function TransactionForm() {
  return (
    <div className="flex flex-col gap-2 justify-between items-center px-4 lg:px-0">
      <Input
        className="bg-white p-4 w-full rounded-sm"
        placeholder={"Nome da transação"}
      />
      <Input
        className="bg-white p-4 w-full rounded-sm"
        placeholder={"Preço"}
        type="number"
      />
      <Input
        className="bg-white p-4 w-full rounded-sm"
        placeholder={"Categoria"}
      />

      <Select defaultValue="entrada">
        <SelectTrigger className="bg-white p-4 w-full rounded-sm data-[size=default]:h-[58px]">
          <SelectValue placeholder="Operação" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="entrada">
            <Image
              src={"/entrada.svg"}
              alt={"Entrada"}
              width={25}
              height={25}
              priority
            />
            Entrada
          </SelectItem>
          <SelectItem value="saida">
            <Image
              src={"/saida.svg"}
              alt={"saida"}
              width={25}
              height={25}
              priority
            />
            Saída
          </SelectItem>
        </SelectContent>
      </Select>
      <Button>Salvar</Button>
    </div>
  );
}
