"use client";
import { useState } from "react";
import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";
import ProductAmountCounter from "./productAmountCounter";
import StandardInfo from "./standardInfo";
import DropDownMenu from "./drop-down-menu";
import CollectionTitle from "@/components/product/collectionTitle";
import PayMethodsBanner from "@/components/product/PayMethodsBanner";
import StockStatusIndicator from "@/components/product/stockStatusIndicator";

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
  const splitDescription = product.description?.split(";");
  const productIntro = splitDescription[0];
  const productDetails = splitDescription[1];
  const ingredients = splitDescription[2];
  const sustainability = splitDescription[3];
  const warnings = splitDescription[4];

  //TODO Convert to own component
  const kopfMatch = productDetails.match(/Kopfnote:\s*(.+?)(?=\s*Herznote:|$)/);
  const herzMatch = productDetails.match(
    /Herznote:\s*(.+?)(?=\s*Basisnote:|$)/,
  );
  const basisMatch = productDetails.match(/Basisnote:\s*(.+)$/);

  const formatiereDuftkomponenten = (
    art: string,
    komponenten: string | undefined,
  ) => {
    if (!komponenten) return "";
    const duftstoffe = komponenten
      .split("-")
      .map((k) => k.trim())
      .filter(Boolean)
      .join(" - ");
    return `${art}: ${duftstoffe}`;
  };
  //TODO

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
        <DropDownMenu title={"Duftnote"}>
          <ul className="flex flex-col gap-y-2 list-disc pl-4">
            <li>{formatiereDuftkomponenten("Kopfnote", kopfMatch?.[1])}</li>
            <li>{formatiereDuftkomponenten("Herznote", herzMatch?.[1])}</li>
            <li>{formatiereDuftkomponenten("Basisnote", basisMatch?.[1])}</li>
          </ul>
        </DropDownMenu>
        <DropDownMenu title={"Inhaltsstoffe"}>{ingredients}</DropDownMenu>
        <DropDownMenu title={"Zusätzliche Produktinformationen"}>
          {sustainability}
        </DropDownMenu>
        <DropDownMenu title={"Warnhinweise"}>{warnings}</DropDownMenu>
      </div>
    </div>
  );
}
