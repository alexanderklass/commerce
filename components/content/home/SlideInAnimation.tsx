"use client";
import { motion } from "framer-motion";
import React from "react";

type SlideInAnimationProps = {
  children: React.ReactNode;
  index?: number;
};

function SlideInAnimation({ children, index }: SlideInAnimationProps) {
  return (
    <motion.div
      initial={{ x: index === 0 ? 300 : -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInAnimation;
