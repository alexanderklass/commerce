"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
type ProductAmountCounterProps = {
  handleAmountChange: any;
  quantity: number;
  availableForSale: boolean;
};

export default function ProductAmountCounter({
  handleAmountChange,
  quantity,
  availableForSale,
}: ProductAmountCounterProps) {
  const [animationValue, setAnimationValue] = useState(true);

  //TODO implement max amount from product availability.
  const countUp = () => {
    handleAmountChange((prevState: number) => prevState + 1);
    setAnimationValue(true);
  };

  const countDown = () => {
    if (quantity === 1) return;
    handleAmountChange((prevState: number) => prevState - 1);
    setAnimationValue(false);
  };

  return (
    <div
      className={`${!availableForSale ? "text-gray-400" : "text-black"} bg-gray-50 rounded-full text-sm flex-row items-center justify-center flex`}
    >
      <button
        disabled={!availableForSale}
        className={
          "cursor-pointer hover:bg-gray-200 duration-300 bg-gray-100 p-2 rounded-full"
        }
        onClick={countDown}
      >
        <Minus className={"text-gray-500"} size={20} />
      </button>
      <div
        aria-disabled={!availableForSale}
        className={`overflow-hidden font-bold w-12 h-5 flex items-center justify-center`}
      >
        <AnimatePresence>
          <motion.div
            key={quantity}
            initial={{ opacity: 0, x: animationValue ? 35 : -35 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: animationValue ? -35 : 35 }}
            transition={{ duration: 0.3 }}
            className={"absolute pointer-events-none"}
          >
            <p>{quantity}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        disabled={!availableForSale}
        className={
          "cursor-pointer hover:bg-gray-200 duration-300 bg-gray-100 p-2 rounded-full"
        }
        onClick={countUp}
      >
        <Plus className={"text-gray-500"} size={20} />
      </button>
    </div>
  );
}
