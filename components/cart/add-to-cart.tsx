'use client';

import clsx from 'clsx';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { addItem } from 'components/cart/actions';
import { useProduct } from 'components/product/product-context';
import { Product, ProductVariant } from 'lib/shopify/types';
import { useActionState } from 'react';

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const buttonClasses =
    'relative text-sm flex flex-row items-center justify-center font-bold cursor-pointer transition-all rounded-md bg-sky-600 px-4 py-2 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button disabled className={clsx(buttonClasses, disabledClasses)}>
        Nicht verfügbar
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button aria-label="Please select an option" disabled className={clsx(buttonClasses, disabledClasses)}>
        <ShoppingCartIcon className="mx-2 h-4" />
        In den Warenkorb
      </button>
    );
  }

  return (
    <button
      aria-label="Add to cart"
      className={clsx(buttonClasses, {
        'hover:bg-sky-700': true,
      })}
    >
      <ShoppingCartIcon className="mx-2 h-4" />
      In den Warenkorb
    </button>
  );
}

export function AddToCart({ product, quantity }: { product: Product; quantity: number }) {
  const { variants, availableForSale } = product;
  const { state } = useProduct();
  const [message, formAction] = useActionState(addItem, null);

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every((option) => option.value === state[option.name.toLowerCase()])
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;

  return (
    <form
      action={async () => {
        if (!selectedVariantId) return;
        formAction({
          selectedVariantId: selectedVariantId,
          quantity: quantity,
        });
      }}
    >
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
