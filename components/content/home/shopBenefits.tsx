import { Award, Package2, Sparkles } from "lucide-react";

export default function ShopBenefits() {
  const ShopBenefitItem = ({
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
        Warum bei Kaory bestellen?
      </p>
      <div className={"w-[1400px] mx-auto flex flex-row gap-x-4"}>
        <ShopBenefitItem
          icon={<Award size={50} color={"#295bb3"} />}
          title={"100 % Originalware"}
          text={
            "Unsere Düfte stammen ausschließlich aus originalen Markenflakons – keine Fakes, keine Dupes, keine Kompromisse."
          }
        />
        <ShopBenefitItem
          icon={<Sparkles size={50} color={"#295bb3"} />}
          title={"Luxuriöse Qualität"}
          text={
            "Hochwertige Glasflakons, edle Sprühköpfe und stilvolle Verpackung – bei uns zählt jedes Detail."
          }
        />
        <ShopBenefitItem
          icon={<Package2 color={"#295bb3"} size={50} />}
          title={"Schneller & sicherer Versand"}
          text={
            "Schneller Versand in bruchsicherer Verpackung – damit dein Duft sicher und schnell bei dir ankommt."
          }
        />
      </div>
    </section>
  );
}
