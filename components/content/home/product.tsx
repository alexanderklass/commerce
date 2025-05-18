"use client";
import ProductImage from "@/components/content/home/product-image";
import Price from "@/components/price";
import ProductQuickBuySelect from "@/components/content/home/product-quickbuy-select";
import ProductQuickBuyAddToCart from "@/components/content/home/product-quickbuy-add-to-cart";
import { useState } from "react";
type newProductProps = {
  product: any;
  newProduct?: boolean;
};

export default function Product({ product, newProduct }: newProductProps) {
  //TODO integrate handle price by change of variant
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  return (
    <div
      className={
        "rounded-lg w-full relative bg-white overflow-hidden hover:shadow-lg transition-all duration-300 shadow-md"
      }
    >
      <p
        className={`${!newProduct && "hidden"} bg-black text-white z-10 py-1 px-2 absolute top-2 left-2 font-bold rounded-md text-sm`}
      >
        Neu
      </p>
      <ProductImage product={product} />
      <div
        className={
          "flex w-full min-h-[180px] p-4 text-black justify-between items-center flex-col"
        }
      >
        <p>{product.title}</p>
        <div className={"w-full flex flex-col gap-y-4"}>
          <ProductQuickBuySelect
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
            product={product}
          />
          <div className={"w-full flex flex-row justify-between items-center"}>
            <Price
              amount={product.priceRange.minVariantPrice.amount}
              currencyCode={product.priceRange.minVariantPrice.currencyCode}
            />
            <ProductQuickBuyAddToCart selectedVariant={selectedVariant} />
          </div>
        </div>
      </div>
    </div>
  );
}
