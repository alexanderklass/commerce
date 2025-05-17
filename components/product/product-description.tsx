"use client";
import { Suspense, useState } from "react";
import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";
import ProductAmountCounter from "./productAmountCounter";
import StandardInfo from "./standardInfo";
import CollectionTitle from "@/components/product/collectionTitle";
import PayMethodsBanner from "@/components/product/PayMethodsBanner";
import StockStatusIndicator from "@/components/product/stockStatusIndicator";
import ProductInformation from "@/components/product/product-information";

export function ProductDescription({
  product,
  featuredProduct,
}: {
  product: Product;
  featuredProduct?: boolean;
}) {
  const [selectedPrice, setSelectedPrice] = useState(
    product.priceRange.minVariantPrice.amount,
  );
  const [selectedVariantInStock, setSelectedVariantInStock] = useState<
    null | boolean
  >(null);
  const [quantityCounter, setQuantityCounter] = useState(1);
  const productIntro = product.description?.split(";")[0];

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

  const pricerInLiters = pricePerLiter();

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <CollectionTitle title={product.title} />
          <h1 className="mb-2 mt-2 text-black text-3xl font-medium">
            {product.title}
          </h1>
        </div>
        <div className="mr-auto mb-5 relative w-auto text-lg font-bold text-black">
          <Price
            priceInLiters={pricerInLiters}
            amount={selectedPrice}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
        <div className={"text-gray-700 mb-5"}>{productIntro}</div>
      </div>
      <VariantSelector
        selectedVariantInStock={setSelectedVariantInStock}
        options={product.options}
        setCurrentPrice={setSelectedPrice}
        variants={product.variants}
      />
      <StockStatusIndicator inStock={selectedVariantInStock} />
      <div className="flex flex-row gap-x-3">
        <ProductAmountCounter
          availableForSale={product.availableForSale}
          quantity={quantityCounter}
          handleAmountChange={setQuantityCounter}
        />
        <AddToCart quantity={quantityCounter} product={product} />
      </div>
      <StandardInfo />
      <PayMethodsBanner />
      <div className={`${featuredProduct && "hidden"} flex flex-col gap-y-5`}>
        <Suspense fallback={null}>
          <ProductInformation description={product.description} />
        </Suspense>
      </div>
    </div>
  );
}
