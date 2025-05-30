"use client";
import React, { useState } from "react";
import Image from "next/image";
import placeholder from "@/src/placeholder.png";
import CollectionTitle from "@/components/product/collectionTitle";
import Price from "../../price";
import { Product } from "@/lib/shopify/types";
import ProductQuickBuyAddToCart from "@/components/content/home/product-quickbuy-add-to-cart";
import PayMethodsBanner from "@/components/product/PayMethodsBanner";
import StandardInfo from "@/components/product/standardInfo";
import ProductAmountCounter from "@/components/product/productAmountCounter";
import FeaturedProductToggleVariant from "@/components/content/home/featuredProductToggleVariant";
import StockStatusIndicator from "@/components/product/stockStatusIndicator";
export default function FeaturedProduct({
  product,
  reverse = false,
}: {
  product: Product;
  reverse?: boolean;
}) {
  const [selectedPrice, setSelectedPrice] = useState(
    product.priceRange.minVariantPrice.amount,
  );
  const [productCounter, setProductCounter] = useState(1);
  const handleVariantStartUpValue = () => {
    const filterByAvailable = product.variants.filter((variant: any) => {
      return variant.availableForSale === true;
    });
    if (filterByAvailable.length === 0) return product.variants[0];
    return filterByAvailable[0];
  };
  const [selectedVariant, setSelectedVariant] = useState(
    handleVariantStartUpValue(),
  );

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

  const productDescription = product.description.split(";")[0];

  if (!product) return null;
  return (
    <section className={"flex w-full items-center justify-center py-12"}>
      <div
        className={
          "flex w-[1400px] flex-col items-center justify-center gap-y-10"
        }
      >
        <div
          key={product.handle}
          className={`${reverse ? "flex-row-reverse" : "flex-row"} flex w-full items-center gap-x-5 justify-between rounded-lg shadow-md bg-sky-100/20`}
        >
          <div
            className={`flex items-center justify-center bg-gray-200/20 w-full h-full`}
          >
            <Image
              className={"w-full h-full object-contain"}
              width={40}
              height={40}
              src={product.featuredImage?.url || placeholder}
              alt={product.handle}
            />
          </div>
          <div className={"w-full flex flex-col gap-y-2 p-5"}>
            <div className={"flex flex-col gap-y-1 items-start justify-center"}>
              <CollectionTitle title={product.title} />
              <p className={"font-bold text-xl"}>{product.title}</p>
            </div>
            <div className={"font-bold"}>
              <Price
                priceInLiters={priceInLiter}
                amount={selectedPrice}
                currencyCode={product.priceRange.minVariantPrice.currencyCode}
              />
            </div>
            <p className={"text-gray-600"}>{productDescription}</p>
            <FeaturedProductToggleVariant
              selectedVariantPrice={setSelectedPrice}
              selectedVariant={selectedVariant}
              setSelectedVariant={setSelectedVariant}
              product={product}
            />
            <StockStatusIndicator
              inStock={selectedVariant?.availableForSale || false}
            />
            <div className={"flex flex-row items-center gap-x-2"}>
              <ProductAmountCounter
                availableForSale={selectedVariant?.availableForSale || false}
                handleAmountChange={setProductCounter}
                quantity={productCounter}
              />
              <ProductQuickBuyAddToCart
                quantity={productCounter}
                selectedVariant={selectedVariant}
              />
            </div>
            <StandardInfo />
            <PayMethodsBanner />
          </div>
        </div>
      </div>
    </section>
  );
}
