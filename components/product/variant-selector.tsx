'use client';

import clsx from 'clsx';
import { useProduct, useUpdateURL } from 'components/product/product-context';
import { ProductOption, ProductVariant } from 'lib/shopify/types';
import { useEffect } from 'react';

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export function VariantSelector({
  options,
  variants,
  setCurrentPrice,
  selectedVariantInStock,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
  setCurrentPrice: any;
  selectedVariantInStock: any;
}) {
  const { state, updateOption } = useProduct();
  const updateURL = useUpdateURL();
  const hasNoOptionsOrJustOneOption = !options.length || (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({
        ...accumulator,
        [option.name.toLowerCase()]: option.value,
      }),
      {}
    ),
  }));

  const firstOption = options[0];
  if (!firstOption) return null;
  const modifiedOptions = [
    {
      ...firstOption,
      values: firstOption.values.map((optionValue) => {
        const matchingVariant = variants.find((variant) =>
          variant.selectedOptions.some((option) => option.value === optionValue && option.name === firstOption.name)
        );

        return {
          value: optionValue,
          price: matchingVariant?.price,
        };
      }),
    },
  ];

  useEffect(() => {
    //Check if some variants available
    const checkIfSomeAvailable = combinations.some((combination) => combination.availableForSale);
    selectedVariantInStock(checkIfSomeAvailable);
  }, []);

  return modifiedOptions.map((option) => (
    <form className={'text-black'} key={option.id}>
      <dl className="mb-8">
        <dt className="mb-2 text-sm font-bold tracking-wide uppercase">{option.name}</dt>
        <dd className="flex flex-wrap gap-2">
          {option.values.map((item) => {
            const optionNameLowerCase = option.name.toLowerCase();
            const optionParams = {
              ...state,
              [optionNameLowerCase]: item.value,
            };
            const filtered = Object.entries(optionParams).filter(([key, value]) =>
              options.find((option) => option.name.toLowerCase() === key && option.values.includes(value))
            );
            const isAvailableForSale = combinations.find((combination) =>
              filtered.every(([key, value]) => combination[key] === value && combination.availableForSale)
            );

            const isActive = state[optionNameLowerCase] === item.value;

            return (
              <button
                formAction={() => {
                  const newState = updateOption(optionNameLowerCase, item.value);
                  setCurrentPrice(item.price?.amount);
                  selectedVariantInStock(isAvailableForSale);
                  updateURL(newState);
                }}
                key={item.value}
                aria-disabled={!isAvailableForSale}
                disabled={!isAvailableForSale}
                title={`${option.name} ${item.value}${!isAvailableForSale ? ' (Out of Stock)' : ''}`}
                className={clsx(
                  'flex h-12 min-w-[48px] cursor-pointer items-center justify-center rounded-md border p-7 text-sm',
                  {
                    'cursor-default bg-blue-50 ring-2 ring-blue-600': isActive,
                    'ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-blue-600':
                      !isActive && isAvailableForSale,
                    'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform':
                      !isAvailableForSale,
                  }
                )}
              >
                <div className={'flex flex-col'}>
                  <p className={'text-base font-bold'}>{item.value}</p>
                  <p className={'text-gray-700'}>€{item.price?.amount}</p>
                </div>
              </button>
            );
          })}
        </dd>
      </dl>
    </form>
  ));
}
