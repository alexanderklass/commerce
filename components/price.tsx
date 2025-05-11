import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
const Price = ({
  amount,
  className,
  currencyCode = "USD",
  currencyCodeClassName,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
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
      </motion.p>
    </AnimatePresence>
  );
};

export default Price;
