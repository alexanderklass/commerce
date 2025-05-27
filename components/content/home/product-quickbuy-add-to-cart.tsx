import { addItem } from "components/cart/actions";
import { useActionState } from "react";

type ProductQuickBuyAddToCartProps = {
  selectedVariant: any;
};

export default function ProductQuickBuyAddToCart({
  selectedVariant,
}: ProductQuickBuyAddToCartProps) {
  const [message, formAction] = useActionState(addItem, null);
  const handleSubmit = async () => {
    if (!selectedVariant?.id) return;
    formAction({
      selectedVariantId: selectedVariant?.id,
      quantity: 1,
    });
  };

  return (
    <form
      aria-disabled={!selectedVariant.availableForSale}
      action={handleSubmit}
    >
      <button
        disabled={!selectedVariant.availableForSale}
        className={`cursor-pointer rounded-md bg-sky-600 px-3 py-1.5 text-white transition-all duration-300 hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black`}
      >
        {selectedVariant.availableForSale ? (
          <p>+ Hinzufügen</p>
        ) : (
          <p>Nicht verfügbar</p>
        )}
      </button>
    </form>
  );
}
