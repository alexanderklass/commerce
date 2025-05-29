import { BaggageClaim, TestTubeDiagonal, ChartNoAxesGantt } from "lucide-react";
//TODO Mayme implement lottie json animation
export default function FlaconBenefit() {
  const FlaconBenefitItem = ({
    icon,
    title,
    text,
  }: {
    icon: React.ReactNode;
    title: string;
    text: string;
  }) => {
    return (
      <div
        className={
          "flex flex-row gap-x-4 hover:-translate-y-2 w-full cursor-pointer transition-all duration-300 p-5 shadow-md shadow-gray-300 border border-gray-100 rounded-lg"
        }
      >
        <div className={"flex items-center justify-center"}>{icon}</div>
        <div className={"flex flex-col gap-y-1"}>
          <p className={"text-gray-700 font-bold"}>{title}</p>
          <p className={"text-gray-500 text-sm"}>{text}</p>
        </div>
      </div>
    );
  };

  return (
    <section className={"w-full bg-gray-50 py-12"}>
      <p className={"font-bold text-center text-3xl mb-5"}>
        Warum Parfümabfüllungen?
      </p>
      <div className={"w-[1400px] mx-auto flex flex-row gap-x-4"}>
        <FlaconBenefitItem
          icon={<TestTubeDiagonal size={50} color={"#295bb3"} />}
          title={"Testen vor dem Kauf"}
          text={
            "Du kannst Düfte ausprobieren, bevor du dich für den teuren Originalflakon entscheidest."
          }
        />
        <FlaconBenefitItem
          icon={<BaggageClaim size={50} color={"#295bb3"} />}
          title={"Perfekt für unterwegs"}
          text={
            "Kleine, handliche Größen – ideal für Reisen, den Alltag oder die Handtasche."
          }
        />
        <FlaconBenefitItem
          icon={<ChartNoAxesGantt color={"#295bb3"} size={50} />}
          title={"Vielfalt ohne Risiko"}
          text={
            "Entdecke viele verschiedene Düfte zu fairen Preisen – ohne dich auf eine große Flasche festzulegen."
          }
        />
      </div>
    </section>
  );
}
