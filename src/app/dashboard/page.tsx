import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IoMdExit } from "react-icons/io";

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center pt-2 pb-16 px-6 bg-green">
          <Image
            src="/logo_finnova_branca.svg"
            alt="Logo Finnova"
            width={140}
            height={140}
            priority
          />
          <IoMdExit size={30} className="text-white" />
        </div>

        <div className="flex flex-col gap-2 bg-gray w-full pb-8">
          <div className="w-full flex flex-row gap-4 overflow-x-auto pb-2 px-6 -translate-y-12">
            {GeneralTransactions.map((item) => (
              <TransactionContainer
                key={item.id}
                bgColor={item.colors.bg}
                textColor={item.colors.text}
                icon={item.icon}
                iconAlt={item.iconAlt}
                label={item.label}
              />
            ))}
          </div>
          <div className="flex flex-row justify-between items-center px-6 -mt-12">
            <p>Transações</p>
            <p>4 itens</p>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center px-6">
            <Input
              className="bg-white px-4 py-2 w-full rounded-sm"
              placeholder={"Procurar.."}
            />
            <Image
              src="/lupa.svg"
              alt="Ícone de busca"
              width={28}
              height={28}
            />
            <Image src="/mais.svg" alt="Ícone de mais" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-2 px-6">
            {Transactions.map((transaction) => (
              <TransactionDetails key={transaction.id} {...transaction} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function TransactionContainer({
  bgColor,
  textColor,
  icon,
  iconAlt,
  label,
}: {
  bgColor: string;
  textColor: string;
  icon: string;
  iconAlt: string;
  label: string;
}) {
  return (
    <div
      className={cn(
        `flex flex-col p-4 rounded-sm gap-2 w-[180px] shrink-0`,
        bgColor
      )}
    >
      <div className=" flex flex-row justify-between items-center ">
        <p className={cn(textColor)}>{label}</p>
        <Image src={icon} alt={iconAlt} width={30} height={30} priority />
      </div>
      <h6 className={cn(`font-medium text-lg`, textColor)}>R$ 17.000,00</h6>
    </div>
  );
}

function TransactionDetails({
  label,
  amount,
  type,
  icon,
  iconAlt,
  origin,
  date,
}: {
  label: string;
  amount: string;
  type: string;
  icon: string;
  iconAlt: string;
  origin: string;
  date: string;
}) {
  return (
    <div className="flex flex-col bg-white px-4 py-2 rounded-sm gap-1 w-full">
      <div className=" flex flex-row justify-between items-center ">
        <p>{label}</p>
        <Image src={icon} alt={iconAlt} width={30} height={30} priority />
      </div>
      <h6
        className={`font-medium text-lg ${
          type === "ENTRADA" ? "text-green" : "text-red"
        }`}
      >
        {amount}
      </h6>
      <div className="flex flex-row justify-between items-center text-[#7C7C8A] text-sm">
        <p>{origin}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

const GeneralTransactions = [
  {
    id: 1,
    label: "Entradas",
    amount: "R$ 17.000,00",
    icon: "/entrada.svg",
    iconAlt: "Ícone de entrada",
    colors: {
      bg: "bg-white",
      text: "text-black",
    },
  },
  {
    id: 2,
    label: "Saídas",
    amount: "R$ 17.000,00",
    icon: "/saida.svg",
    iconAlt: "Ícone de saída",
    colors: {
      bg: "bg-white",
      text: "text-black",
    },
  },
  {
    id: 3,
    label: "Total",
    amount: "R$ 17.000,00",
    icon: "/cifrao.svg",
    iconAlt: "Ícone de cifrão",
    colors: {
      bg: "bg-dark-green",
      text: "text-white",
    },
  },
];

const Transactions = [
  {
    id: 1,
    label: "Salário",
    amount: "R$ 17.000,00",
    type: "ENTRADA",
    icon: "/entrada.svg",
    iconAlt: "Ícone de entrada",
    origin: "Trabalho",
    date: "10/10/2024",
  },
  {
    id: 2,
    label: "Freelance",
    amount: "R$ 2.500,00",
    type: "ENTRADA",
    icon: "/entrada.svg",
    iconAlt: "Ícone de entrada",
    origin: "Projeto Web",
    date: "08/10/2024",
  },
  {
    id: 3,
    label: "Supermercado",
    amount: "R$ 230,50",
    type: "SAÍDA",
    icon: "/saida.svg",
    iconAlt: "Ícone de saída",
    origin: "Extra",
    date: "07/10/2024",
  },
  {
    id: 4,
    label: "Combustível",
    amount: "R$ 150,00",
    type: "SAÍDA",
    icon: "/saida.svg",
    iconAlt: "Ícone de saída",
    origin: "Posto Shell",
    date: "06/10/2024",
  },
  {
    id: 5,
    label: "Aluguel",
    amount: "R$ 1.200,00",
    type: "SAÍDA",
    icon: "/saida.svg",
    iconAlt: "Ícone de saída",
    origin: "Imobiliária",
    date: "01/10/2024",
  },
  {
    id: 6,
    label: "Vendas Online",
    amount: "R$ 380,00",
    type: "ENTRADA",
    icon: "/entrada.svg",
    iconAlt: "Ícone de entrada",
    origin: "Mercado Livre",
    date: "05/10/2024",
  },
  {
    id: 7,
    label: "Restaurante",
    amount: "R$ 85,90",
    type: "SAÍDA",
    icon: "/saida.svg",
    iconAlt: "Ícone de saída",
    origin: "Outback",
    date: "04/10/2024",
  },
  {
    id: 8,
    label: "Energia Elétrica",
    amount: "R$ 189,44",
    type: "SAÍDA",
    icon: "/saida.svg",
    iconAlt: "Ícone de saída",
    origin: "CEMIG",
    date: "03/10/2024",
  },
];
