"use client";

import { useState } from "react";

export default function ProductAmountCounter() {
  const [amount, setAmount] = useState(1);

  //TODO implement max amount from product availability

  const countUp = () => {
    setAmount((prevState) => prevState + 1);
  };

  const countDown = () => {
    if (amount === 1) return;
    setAmount((prevState) => prevState - 1);
  };

  return (
    <div className={"text-black text-sm flex-row items-center justify-center flex"}>
      <button
        className={"border cursor-pointer py-2 px-4 rounded-l-lg"}
        onClick={countDown}
      >
        -
      </button>
      <p className={"border-t border-b py-2 text-center w-12"}>{amount}</p>
      <button
        className={"border cursor-pointer py-2 px-4 rounded-r-lg"}
        onClick={countUp}
      >
        +
      </button>
    </div>
  );
}
