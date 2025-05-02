"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function NewsBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const infoList = [
    "Kostenloser Versand ab 50€",
    "Newsletter abonnieren und 5% sparen",
    "Freunde einladen und 10% sparen",
  ];

  const initial = { opacity: 0, x: 300 };
  const animate = { opacity: 1, x: 0 };
  const exit = { opacity: 0, x: -300 };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % infoList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div
      className={
        "bg-blue-200 w-full h-10 flex items-center text-black/70 text-sm font-bold text-center py-2"
      }
    >
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{ duration: 0.5 }}
          className={"fixed left-0 right-0"}
        >
          {infoList[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
