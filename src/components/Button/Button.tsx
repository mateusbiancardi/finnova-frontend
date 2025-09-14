import { cn } from "@/lib/utils";
import { Button as CNButton } from "../ui/button";

export default function Button(props: React.ComponentProps<typeof CNButton>) {
  return (
    <CNButton
      {...props}
      className={cn(
        "bg-green hover:bg-green-dark p-4 rounded-sm w-full",
        props.className
      )}
    />
  );
}
