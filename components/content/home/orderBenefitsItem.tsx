import React from "react";

type OrderBenefitsItemProps = {
  text: string;
  title: string;
  icon: React.ReactNode;
};

export default function OrderBenefitsItem({
  text,
  title,
  icon,
}: OrderBenefitsItemProps) {
  return (
    <div className={"flex flex-col gap-y-3 items-center justify-center"}>
      <div className={"flex flex-col gap-y-2 text-center items-center"}>
        {icon}
        <p className={"text-gray-500 font-bold"}>{title.toUpperCase()}</p>
      </div>
      <p className={"text-md text-gray-500"}>{text}</p>
    </div>
  );
}
