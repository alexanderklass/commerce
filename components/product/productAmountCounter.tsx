"use client";

import { AnimatePresence, motion } from "framer-motion";

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
  //TODO implement max amount from product availability

  const countUp = () => {
    handleAmountChange((prevState: number) => prevState + 1);
  };

  const countDown = () => {
    if (quantity === 1) return;
    handleAmountChange((prevState: number) => prevState - 1);
  };

  return (
    <div
      className={`${!availableForSale ? "text-gray-400" : "text-black"} text-sm flex-row items-center justify-center flex`}
    >
      <button
        disabled={!availableForSale}
        className={
          "border border-black disabled:border-gray-300 cursor-pointer py-2 px-4 rounded-l-lg"
        }
        onClick={countDown}
      >
        -
      </button>
      <AnimatePresence>
        <div
          className={`border-t ${!availableForSale ? "border-gray-300" : "border-black"} overflow-hidden border-b py-2 text-center w-12`}
        >
          <motion.div
            key={quantity}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            {quantity}
          </motion.div>
        </div>
      </AnimatePresence>
      <button
        disabled={!availableForSale}
        className={
          "border-black disabled:border-gray-300 border cursor-pointer py-2 px-4 rounded-r-lg"
        }
        onClick={countUp}
      >
        +
      </button>
    </div>
  );
}
