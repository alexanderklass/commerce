"use client";
import { useState } from "react";
import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";
import ProductAmountCounter from "./productAmountCounter";
import StandardInfo from "./standardInfo";
import DropDownMenu from "./drop-down-menu";
import Link from "next/link";

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
  const [quantityCounter, setQuantityCounter] = useState(1);
  const splitDescription = product.description?.split(";");
  const productIntro = splitDescription[0];
  const productDetails = splitDescription[1];
  const ingredients = splitDescription[2];
  const sustainability = splitDescription[3];
  const warnings = splitDescription[4];

  const pricePerLiter = () => {
    const currentVariant = product.variants.find(
      (variant) => variant.price.amount === selectedPrice,
    );
    if (!currentVariant?.title) return null;
    const mlMatch = currentVariant.title.split(" ");
    const mlAvailable = mlMatch[1];
    if (mlAvailable !== "ml") return null;
    const ml = mlMatch[0];
    if (!ml) return null;
    const mlAmount = parseInt(ml);
    const price = (Number(selectedPrice) / mlAmount) * 1000;
    return price.toFixed(2) + "€ / 1 l, inkl. MwSt.";
  };
  const pricerInLiters = pricePerLiter();

  //TODO Create own component for this
  const splitTitle = product.title.split("|");
  const collectionTitle = splitTitle[0];
  const URL = `/search/${collectionTitle.toLowerCase().trim()}`;

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <Link
            className={"text-gray-500 underline uppercase underline-offset-2"}
            href={URL}
          >
            {collectionTitle}
          </Link>
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
        options={product.options}
        setCurrentPrice={setSelectedPrice}
        variants={product.variants}
      />
      <div className="flex flex-row gap-x-3">
        <ProductAmountCounter
          availableForSale={product.availableForSale}
          quantity={quantityCounter}
          handleAmountChange={setQuantityCounter}
        />
        <AddToCart quantity={quantityCounter} product={product} />
      </div>
      <StandardInfo />
      <div className={`${featuredProduct && "hidden"} flex flex-col gap-y-5`}>
        <DropDownMenu title={"Duftnote"}>{productDetails}</DropDownMenu>
        <DropDownMenu title={"Inhaltsstoffe"}>{ingredients}</DropDownMenu>
        <DropDownMenu title={"Zusätzliche Produktinformationen"}>
          {sustainability}
        </DropDownMenu>
        <DropDownMenu title={"Warnhinweise"}>{warnings}</DropDownMenu>
      </div>
    </div>
  );
}
