"use client";
import React from "react";
import { Product } from "lib/shopify/types";
function FeaturedProductToggleVariant({
  product,
  setSelectedVariant,
  selectedVariant,
  selectedVariantPrice,
}: {
  product: Product;
  setSelectedVariant: any;
  selectedVariant: any;
  selectedVariantPrice: any;
}) {
  //TODO Create helper
  const variantItems = product.variants;
  const productOptions = product.options;

  const options = productOptions[0];
  if (!options) return null;
  const modifiedOptions = [
    {
      ...options,
      values: options.values.map((optionValue: any) => {
        const matchingVariant = variantItems.find((variant: any) =>
          variant.selectedOptions.some(
            (option: any) =>
              option.value === optionValue && option.name === option.name,
          ),
        );

        return {
          value: optionValue,
          price: matchingVariant?.price,
          id: matchingVariant?.id,
          availableForSale: matchingVariant?.availableForSale,
        };
      }),
    },
  ];

  const handleSelectVariant = (variant: any) => {
    setSelectedVariant(variant);
    selectedVariantPrice(variant.price.amount);
  };

  if (modifiedOptions[0] === undefined) return;
  return (
    <div className={"flex flex-row gap-x-1.5"}>
      {modifiedOptions[0].values.map((variant: any) => {
        const active = variant.id === selectedVariant.id;
        const disabled = !variant.availableForSale;
        return (
          <button
            disabled={disabled}
            aria-disabled={disabled}
            onClick={() => handleSelectVariant(variant)}
            className={`${active && "ring-sky-700 ring-2 bg-sky-500/10"} ${disabled && "cursor-not-allowed line-through"} ring ring-gray-300 hover:ring-sky-500 rounded-lg cursor-pointer py-1 px-4 duration-300`}
            key={variant.id}
          >
            <p className={`font-bold`}>{variant.value}</p>
            <p className={"text-sm"}>€{variant.price.amount}</p>
          </button>
        );
      })}
    </div>
  );
}

export default FeaturedProductToggleVariant;
