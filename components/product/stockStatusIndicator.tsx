import { AnimatePresence, motion } from "framer-motion";

type StockStatusIndicatorProps = {
  inStock: null | boolean;
};

const PingIndicator = ({ inStock }: StockStatusIndicatorProps) => {
  return (
    <div
      className={`h-3 w-3 p-1 relative flex border ${inStock ? "border-green-700 bg-green-600" : "border-gray-500"} items-center justify-center rounded-full`}
    >
      <div
        className={`absolute  ${inStock ? "bg-green-600 animate-ping" : "bg-gray-500"} h-3 w-3 rounded-full`}
      ></div>
    </div>
  );
};

export default function StockStatusIndicator({
  inStock,
}: StockStatusIndicatorProps) {
  return (
    <AnimatePresence>
      <div
        className={`${inStock === null && "hidden"} animate-fade flex flex-row items-center gap-x-2 mb-5`}
      >
        <PingIndicator inStock={inStock} />
        <div className={`${inStock ? "text-green-600" : "text-gray-500"}`}>
          {inStock ? (
            <p>Auf Lager - in 1 bis 3 Tagen bei Dir</p>
          ) : (
            <p>Nicht auf Lager</p>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}
