import StandardInfoCheckmark from "./standardInfoCheckmark";
import { useCart } from "@/components/cart/cart-context";

export default function StandardInfo() {
  const cart = useCart();
  const cartTotal = cart.cart?.cost?.totalAmount?.amount;
  const freeShipping = Number(cartTotal) >= 50;
  const diff = 50 - Number(cartTotal);
  const shippingText = freeShipping
    ? "Kostenloser Versand"
    : `Noch ${diff.toFixed(2)} € bis zum kostenlosen Versand`;
  return (
    <div
      className={
        "text-gray-700 my-5 gap-y-2 flex flex-col items-start justify-center"
      }
    >
      <StandardInfoCheckmark notChecked={freeShipping} text={shippingText} />
      <StandardInfoCheckmark text="30 Tage Rückgaberecht" />
      <StandardInfoCheckmark text="Nachhaltige Inhaltsstoffe" />
    </div>
  );
}
