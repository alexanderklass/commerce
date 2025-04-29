"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
type DropDownMenuProps = {
  title: string;
  children: React.ReactNode;
};

export default function DropDownMenu({ title, children }: DropDownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={`border-b pb-1 overflow-hidden`}>
      <button
        onClick={handleToggle}
        className={
          "flex cursor-pointer flex-row py-2 text-black justify-between w-full"
        }
      >
        <p className={"font-bold text-gray-600"}>{title}</p>
        <ChevronDownIcon
          className={`${isOpen && "rotate-180"} transition-all duration-300 text-gray-700`}
          height={20}
          width={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-700 text-sm"
          >
            <p>{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
