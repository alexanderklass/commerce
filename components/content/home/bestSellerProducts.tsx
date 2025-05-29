import { getProducts } from "@/lib/shopify";
import { Product } from "@/lib/shopify/types";
import Link from "next/link";
import NewsProduct from "@/components/content/home/product";
export async function BestSellerProducts() {
  const products: Product[] = await getProducts({ sortKey: "BEST_SELLING" });
  const bestSellingProducts: Product[] = products.slice(0, 4);
  return (
    <section
      className={
        "w-full flex items-center justify-center flex-col bg-white py-8"
      }
    >
      <div
        className={
          "w-[1400px] gap-y-10 flex flex-col items-start justify-center"
        }
      >
        <div className={"flex w-full items-center"}>
          <p className={"text-4xl font-bold text-black mx-auto text-center"}>
            Unsere Bestseller
          </p>
          <Link
            className={"underline text-black underline-offset-3"}
            href={"/search?sort=trending-desc"}
          >
            Alle anzeigen
          </Link>
        </div>
        <div className={"flex flex-row w-full gap-x-3"}>
          {bestSellingProducts.map((product, index) => {
            return <NewsProduct key={index} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}
