import Button from "../Button/Button";
import TransactionForm from "../Form/TransactionForm";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Drawer,
} from "../ui/drawer";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import Image from "next/image";

export default function TransactionDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="bg-gray">
        <DrawerHeader>
          <DrawerTitle>Cadastrar transação</DrawerTitle>
          <DrawerDescription>Preencha os dados da transação.</DrawerDescription>
        </DrawerHeader>
        <TransactionForm />
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
