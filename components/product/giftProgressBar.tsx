import React from "react";
import { useCart } from "../cart/cart-context";

export default function GiftProgressBar() {
  const cart = useCart();
  const cartTotal = cart.cart?.cost?.totalAmount?.amount;
  const giftOptions = [
    {
      title: "1ml Gratisprobe!",
      text: "bis zur 1ml Gratisprobe!",
      value: 30,
    },
    {
      title: "Gratisversand!",
      text: "bis zum Gratisversand!",
      value: 50,
    },
    {
      title: "3ml Gratisprobe!",
      text: "bis zur 3ml Gratisprobe!",
      value: 70,
    },
  ];

  const GiftBar = ({
    valueDif,
    text,
    progress = 0,
    isDone,
    title,
  }: {
    valueDif: number;
    text: string;
    progress: number;
    isDone: boolean;
    title: string;
  }) => {
    return (
      <div
        className={
          "bg-sky-100 shadow-md text-gray-600 text-center text-[12px] p-2 rounded-lg w-full"
        }
      >
        {isDone ? (
          <p>{title}</p>
        ) : (
          <p className={"mb-2"}>
            Dir fehlen noch {valueDif.toFixed(2)}€ EUR {text}
          </p>
        )}
        <div className={"h-1.5 relative bg-sky-200 rounded-full w-full"}>
          <div
            style={{ width: `${progress}%` }}
            className={`absolute top-0 left-0 bottom-0 bg-blue-500 rounded-full`}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className={"flex flex-col gap-y-3 my-5"}>
      {giftOptions.map((giftOption, index) => {
        const cartTotalNumber = Number(cartTotal);
        const missingValue = giftOption.value - Number(cartTotalNumber);
        const giftValue = giftOption.value;
        const isDone = Math.sign(missingValue) === -1;
        const progress = (Math.abs(cartTotalNumber) / giftValue) * 100;
        return (
          <GiftBar
            key={index}
            isDone={isDone}
            title={giftOption.title}
            progress={isDone ? 100 : progress}
            valueDif={isDone ? giftValue : missingValue}
            text={giftOption.text}
          />
        );
      })}
    </div>
  );
}
