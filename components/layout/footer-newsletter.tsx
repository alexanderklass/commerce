import { ArrowRight } from "lucide-react";

export default function FooterNewsletter() {
  return (
    <div className={"flex max-w-[250px] flex-col gap-y-3"}>
      <p className={"font-bold"}>Newsletter</p>
      <p>
        Melde dich beim Newsletter an und erhalte immer die neusten Produkte
        sowie 5% Rabatt
      </p>
      <div className={"relative flex items-center justify-center"}>
        <input
          className={"border w-full border-neutral-400 p-2 rounded-full"}
          type={"email"}
          placeholder={"E-Mail"}
        />
        <button
          className={
            "absolute hover:bg-black/50 rounded-full p-1 transition-all duration-300 cursor-pointer right-1"
          }
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
