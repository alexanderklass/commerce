import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
const Price = ({
  amount,
  className,
  currencyCode = "USD",
  currencyCodeClassName,
  priceInLiters,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
  priceInLiters?: string | null;
} & React.ComponentProps<"p">) => {
  return (
    <AnimatePresence mode={"wait"} initial={false}>
      <motion.p
        key={amount}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.1 }}
        suppressHydrationWarning={true}
        className={clsx(className, "relative")}
      >
        {`${new Intl.NumberFormat(undefined, {
          style: "currency",
          currency: currencyCode,
          currencyDisplay: "narrowSymbol",
        }).format(parseFloat(amount))}`}
        <span
          className={clsx("ml-1 inline", currencyCodeClassName)}
        >{`${currencyCode}`}</span>
        <span className={"text-[12px] block text-gray-500 font-bold"}>
          {priceInLiters}
        </span>
      </motion.p>
    </AnimatePresence>
  );
};

export default Price;
