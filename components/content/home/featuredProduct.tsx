"use client";
import React, { useState } from "react";
import Image from "next/image";
import placeholder from "@/src/placeholder.png";
import CollectionTitle from "@/components/product/collectionTitle";
import Price from "../../price";
import { Product } from "@/lib/shopify/types";
import ProductQuickBuyAddToCart from "@/components/content/home/product-quickbuy-add-to-cart";

export default function FeaturedProduct({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const [selectedPrice, setSelectedPrice] = useState(
    product.priceRange.minVariantPrice.amount,
  );

  const handleVariantStartUpValue = () => {
    const filterByAvailable = product.variants.filter((variant: any) => {
      return variant.availableForSale === true;
    });
    if (filterByAvailable.length === 0) return product.variants[0];
    return filterByAvailable[0];
  };

  //TODO create helper
  const pricePerLiter = () => {
    const currentVariant = product.variants.find(
      (variant) => variant.price.amount === selectedPrice,
    );
    if (!currentVariant?.title) return null;
    const match = currentVariant.title.match(/(\d+)ml/);
    if (!match) return null;
    const mlAmount = parseInt(match[1] || "0");
    const price = (Number(selectedPrice) / mlAmount) * 1000;
    return price.toFixed(2) + "€ / 1 l, inkl. MwSt.";
  };
  const priceInLiter = pricePerLiter();
  if (!product) return null;
  return (
    <section className={"flex w-full items-center justify-center py-12"}>
      <div
        className={
          "flex w-[1400px] flex-col items-center justify-center gap-y-10"
        }
      >
        <p className={"mb-10 text-4xl font-bold"}>VORGESTELLTE PRODUKTE</p>
        <div
          key={product.handle}
          className={`${index === 0 ? "flex-row-reverse" : "flex-row"} relative flex w-full items-center justify-evenly gap-x-5 p-10 px-5`}
        >
          <div
            className={`absolute h-full w-[80%] ${index === 0 ? "left-0" : "right-0"} rounded-xl bg-blue-500/10`}
          ></div>
          <div
            className={`${index === 0 ? "border-r-4" : "border-l-4"} z-10 border-sky-500`}
          >
            <Image
              className={"h-[500px] w-fit object-contain"}
              width={40}
              height={40}
              src={product.featuredImage?.url || placeholder}
              alt={product.handle}
            />
          </div>
          <div className={"z-10 w-[600px]"}>
            <div>
              <CollectionTitle title={product.title} />
              <p>{product.title}</p>
            </div>
            <div>
              <Price
                priceInLiters={priceInLiter}
                amount={product.priceRange.minVariantPrice.amount}
                currencyCode={product.priceRange.minVariantPrice.currencyCode}
              />
            </div>
            <div>
              <ProductQuickBuyAddToCart
                selectedVariant={handleVariantStartUpValue()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
