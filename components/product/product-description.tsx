import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";
import ProductAmountCounter from "./productAmountCounter";
import StandardInfo from "./standardInfo";
import DropDownMenu from "./drop-down-menu";

export function ProductDescription({ product }: { product: Product }) {
  const splitDescription = product.description?.split(";");
  const productIntro = splitDescription[0];
  const productDetails = splitDescription[1];
  const ingredients = splitDescription[2];
  const sustainability = splitDescription[3];
  const warnings = splitDescription[4];
  return (
    <>
      <div className="flex flex-col">
        <h1 className="mb-2 text-black text-3xl font-medium">
          {product.title}
        </h1>
        <div className="mr-auto mb-5 w-auto text-lg font-bold text-black">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
        <div className={"text-gray-700"}>{productIntro}</div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      <div className="flex flex-row gap-x-3">
        <ProductAmountCounter />
        <AddToCart product={product} />
      </div>
      <StandardInfo />
      <div className="flex flex-col gap-y-5">
        <DropDownMenu title={"Duftnote"}>{productDetails}</DropDownMenu>
        <DropDownMenu title={"Inhaltsstoffe"}>{ingredients}</DropDownMenu>
        <DropDownMenu title={"Zusätzliche Produktinformationen"}>{sustainability}</DropDownMenu>
        <DropDownMenu title={"Warnhinweise"}>{warnings}</DropDownMenu>
      </div>
    </>
  );
}
