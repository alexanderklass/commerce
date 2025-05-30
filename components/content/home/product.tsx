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
  const [selectedVariantPrice, setSelectedVariantPrice] = useState(
    product.priceRange.minVariantPrice.amount,
  );
  return (
    <div
      className={
        "relative w-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
      }
    >
      <p
        className={`${!newProduct && "hidden"} absolute top-2 left-2 z-10 rounded-md bg-black px-2 py-1 text-sm font-bold text-white`}
      >
        Neu
      </p>
      <ProductImage product={product} />
      <div
        className={
          "flex min-h-[180px] w-full flex-col justify-between p-4 text-black"
        }
      >
        <p>{product.title}</p>
        <div className={"flex w-full flex-col gap-y-4"}>
          <ProductQuickBuySelect
            setSelectedVariantPrice={setSelectedVariantPrice}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
            product={product}
          />
          <div className={"flex w-full flex-row items-center justify-between"}>
            <div className={"font-bold"}>
              <Price
                amount={selectedVariantPrice}
                currencyCode={product.priceRange.minVariantPrice.currencyCode}
              />
            </div>
            <ProductQuickBuyAddToCart selectedVariant={selectedVariant} />
          </div>
        </div>
      </div>
    </div>
  );
}
