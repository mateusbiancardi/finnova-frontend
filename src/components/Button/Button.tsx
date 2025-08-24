import { Button as CNButton } from "../ui/button";

export default function Button(props: React.ComponentProps<typeof CNButton>) {
  return <CNButton {...props} className="bg-green p-4 rounded-sm w-full" />;
}
