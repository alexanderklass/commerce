import { CheckIcon } from "@heroicons/react/24/outline";

type StandardInfoCheckmarkProps = {
  text: string;
};

export default function StandardInfoCheckmark({
  text,
}: StandardInfoCheckmarkProps) {
  return (
    <div className={"flex flex-row items-center justify-center gap-x-2"}>
      <CheckIcon className={"text-sky-700"} height={25} width={25} />
      <p>{text}</p>
    </div>
  );
}
