import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import placeholder from "@/src/placeholder.png";
import Image from "next/image";

type ProductImageProps = {
  product: any;
};

function ProductImage({ product }: ProductImageProps) {
  const [hoveredImage, setHoveredImage] = useState(product.featuredImage?.url);

  const handleOnMouseLeave = () => {
    setHoveredImage(product.featuredImage?.url);
  };
  const handleImageChangeOnHover = () => {
    if (product.images.length > 1) {
      setHoveredImage(product.images[1]?.url);
    }
  };

  return (
    <div
      onMouseEnter={handleImageChangeOnHover}
      onMouseLeave={handleOnMouseLeave}
      className={`relative h-[300px] bg-gray-50`}
    >
      <Link href={`/product/${product.handle}`}>
        <AnimatePresence>
          <motion.div
            key={hoveredImage || placeholder}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              className={`object-contain transition-all duration-300`}
              fill
              src={hoveredImage || placeholder}
              alt={`${product.handle}`}
            />
          </motion.div>
        </AnimatePresence>
      </Link>
    </div>
  );
}

export default ProductImage;
