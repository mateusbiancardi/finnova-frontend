import Button from "../Button/Button";
import TransactionForm from "../Form/TransactionForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function TransactionDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray">
        <DialogHeader>
          <DialogTitle>Cadastrar transação</DialogTitle>
          <DialogDescription>Preencha os dados da transação.</DialogDescription>
        </DialogHeader>
        <TransactionForm />
      </DialogContent>
    </Dialog>
  );
}
