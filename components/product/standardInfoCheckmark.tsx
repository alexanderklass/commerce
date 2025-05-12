import { Check } from "lucide-react";

type StandardInfoCheckmarkProps = {
  text: string;
};

export default function StandardInfoCheckmark({
  text,
}: StandardInfoCheckmarkProps) {
  return (
    <div className={"flex flex-row items-center justify-center gap-x-2"}>
      <Check className={"text-sky-700"} height={25} width={25} />
      <p>{text}</p>
    </div>
  );
}
