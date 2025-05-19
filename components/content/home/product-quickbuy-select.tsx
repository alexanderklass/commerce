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
  setSelectedVariantPrice: (value: any) => any;
  selectedVariant: any;
};

export default function ProductQuickBuySelect({
  product,
  setSelectedVariant,
  selectedVariant,
  setSelectedVariantPrice,
}: ProductQuickBuyProps) {
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

  return (
    <Select
      value={selectedVariant?.id}
      onValueChange={(variantId) => {
        const variant = variantItems.find((v: any) => v.id === variantId);
        if (variant) {
          setSelectedVariant(variant);
          setSelectedVariantPrice(variant.price.amount);
        }
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={"Varianten"} />
      </SelectTrigger>
      <SelectContent>
        {modifiedOptions[0].values.map((variant: any) => (
          <SelectItem
            disabled={!variant.availableForSale}
            key={variant.id}
            value={variant.id}
          >
            {variant.availableForSale
              ? variant.value
              : `${variant.value} - Nicht verfügbar`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
