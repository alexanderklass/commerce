import { Check, X } from "lucide-react";
type StandardInfoCheckmarkProps = {
  text: string;
  notChecked?: boolean;
};

export default function StandardInfoCheckmark({
  text,
  notChecked = true,
}: StandardInfoCheckmarkProps) {
  return (
    <div className={"flex flex-row items-center justify-center gap-x-2"}>
      {!notChecked ? (
        <X className={"text-red-700"} height={25} width={25} />
      ) : (
        <Check className={"text-sky-700"} height={25} width={25} />
      )}
      <p>{text}</p>
    </div>
  );
}
