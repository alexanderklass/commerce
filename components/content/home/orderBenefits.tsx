import {
  ShieldCheck,
  Package,
  CreditCard,
  MessageCircleQuestion,
} from "lucide-react";
import OrderBenefitsItem from "@/components/content/home/orderBenefitsItem";

export default function OrderBenefits() {
  const iconStyle = "text-gray-600";
  const iconSize = 80;
  return (
    <section
      className={"w-full flex items-center py-12 justify-center bg-gray-50"}
    >
      <div className={"w-[1400px]"}>
        <div className={"flex flex-row items-center justify-between"}>
          <OrderBenefitsItem
            icon={<ShieldCheck size={iconSize} className={iconStyle} />}
            text={"Wir verkaufen nur originalen Parfüms"}
            title={"100% Original"}
          />
          <OrderBenefitsItem
            icon={<Package size={iconSize} className={iconStyle} />}
            text={"In wenigen Tagen bei dir mit DHL"}
            title={"Schneller versand"}
          />
          <OrderBenefitsItem
            icon={<CreditCard size={iconSize} className={iconStyle} />}
            text={"Zahlen mit Paypal & Klarna"}
            title={"Sichere zahlung"}
          />
          <OrderBenefitsItem
            icon={
              <MessageCircleQuestion size={iconSize} className={iconStyle} />
            }
            text={"Schnelle Hilfe bei Fragen "}
            title={"Erstklassiger Support"}
          />
        </div>
      </div>
    </section>
  );
}
