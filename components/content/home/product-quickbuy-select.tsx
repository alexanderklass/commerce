import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ProductQuickBuyProps = {
  product: any;
  setSelectedVariant: (value: any) => any;
  selectedVariant: any;
};

export default function ProductQuickBuySelect({
  product,
  setSelectedVariant,
  selectedVariant,
}: ProductQuickBuyProps) {
  const variantItems = product.variants;
  return (
    <Select
      value={selectedVariant?.id}
      onValueChange={(variantId) => {
        const variant = variantItems.find((v: any) => v.id === variantId);
        if (variant) {
          setSelectedVariant(variant);
        }
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={"Varianten"} />
      </SelectTrigger>
      <SelectContent>
        {variantItems.map((variant: any) => (
          <SelectItem
            disabled={!variant.availableForSale}
            key={variant.id}
            value={variant.id}
          >
            {variant.availableForSale
              ? variant.title
              : `${variant.title} - Nicht verfügbar`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
