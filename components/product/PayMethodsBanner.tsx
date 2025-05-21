import React from "react";
import Image from "next/image";
import klarna from "@/src/klarna.svg";
import maestro from "@/src/maestro.svg";
import mastercard from "@/src/mastercard.svg";
import visa from "@/src/visa.svg";
import paypal from "@/src/paypal.png";
import googlePay from "@/src/google-pay.png";
import amex from "@/src/american-express.svg";
export default function PayMethodsBanner() {
  return (
    <div className={"flex flex-row gap-1 mb-5 items-center"}>
      <Image
        className={"w-12 h-8 object-contain"}
        src={visa}
        alt="Visa"
        width={48}
        height={32}
      />
      <Image
        className={"w-12 h-8 object-contain"}
        src={mastercard}
        alt="Mastercard"
        width={48}
        height={32}
      />
      <Image
        className={"w-12 h-8 object-contain"}
        src={maestro}
        alt="Maestro"
        width={48}
        height={32}
      />
      <Image
        className={"w-12 h-8 object-contain"}
        src={amex}
        alt="American Express"
        width={48}
        height={32}
      />
      <div className={"bg-white rounded-sm"}>
        <Image
          className={"w-12 h-8 object-contain"}
          src={paypal}
          alt="PayPal"
          width={48}
          height={32}
        />
      </div>
      <div className={"bg-white rounded-sm"}>
        <Image
          className={"w-12 h-8 object-contain"}
          src={googlePay}
          alt="Google Pay"
          width={48}
          height={32}
        />
      </div>
      <Image
        className={"w-12 h-8 object-contain"}
        src={klarna}
        alt="Klarna"
        width={48}
        height={32}
      />
    </div>
  );
}
