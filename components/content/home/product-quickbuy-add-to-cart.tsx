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

  //TODO add status of not available for sale button
  return (
    <form
      aria-disabled={!selectedVariant.availableForSale}
      action={handleSubmit}
    >
      <button
        disabled={!selectedVariant.availableForSale}
        className={`disabled:bg-gray-500 rounded-md hover:bg-sky-600 bg-sky-500 text-white disabled:cursor-not-allowed transition-all duration-300 px-3 py-1.5 cursor-pointer`}
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
