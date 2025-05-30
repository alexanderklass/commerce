import { addItem } from "components/cart/actions";
import { useActionState } from "react";
import { ShoppingCart } from "lucide-react";
type ProductQuickBuyAddToCartProps = {
  selectedVariant: any;
  quantity?: number;
};

export default function ProductQuickBuyAddToCart({
  selectedVariant,
  quantity = 1,
}: ProductQuickBuyAddToCartProps) {
  const [message, formAction] = useActionState(addItem, null);
  const handleSubmit = async () => {
    if (!selectedVariant.id) return;
    formAction({
      selectedVariantId: selectedVariant.id,
      quantity: quantity,
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
          <div className={"flex flex-row items-center"}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            <p>Hinzufügen</p>
          </div>
        ) : (
          <p>Nicht verfügbar</p>
        )}
      </button>
    </form>
  );
}
