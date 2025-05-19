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
    if (!selectedVariant.id) return;
    formAction({
      selectedVariantId: selectedVariant.id,
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
        className={`disabled:bg-gray-100 rounded-md hover:bg-sky-700 bg-sky-600 text-white disabled:text-black disabled:cursor-not-allowed transition-all duration-300 px-3 py-1.5 cursor-pointer`}
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
