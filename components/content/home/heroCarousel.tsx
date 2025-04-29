"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type heroCarouselProps = {
  products: any;
};

export default function HeroCarousel({ products }: heroCarouselProps) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItemIndex((current) =>
        current + 1 < products.length ? current + 1 : 0,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <>
      {products.map((product: any, index: number) => (
        <motion.div
          key={`${product.handle}${index}`}
          initial={{ opacity: 0, x: -300, scale: 0.5 }}
          animate={{
            opacity: index === activeItemIndex ? 1 : 0,
            x: index === activeItemIndex ? 0 : -300,
            scale: index === activeItemIndex ? 1 : 0.5,
          }}
        >
          <Image
            className={`rounded-3xl ${activeItemIndex === index ? "block" : "hidden"} cursor-pointer transition-transform hover:scale-105`}
            src={product.featuredImage?.url}
            alt={`${product.handle}${index}`}
            width={300}
            height={300}
          />
        </motion.div>
      ))}
    </>
  );
}
