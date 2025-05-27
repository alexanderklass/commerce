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
        "w-full flex items-center justify-center flex-col gap-y-10 bg-gray-100 py-16"
      }
    >
      <div
        className={
          "w-[1400px] gap-y-10 flex flex-col items-start justify-center"
        }
      >
        <div className={"flex w-full items-center justify-between"}>
          <p className={"text-3xl font-bold text-black text-center"}>
            Unsere Bestseller
          </p>
          <Link
            className={"underline text-black underline-offset-3"}
            href={"/search?sort=trending-desc"}
          >
            Alle anzeigen
          </Link>
        </div>
        <div className={"flex flex-row gap-x-3"}>
          {bestSellingProducts.map((product, index) => {
            return (
              <NewsProduct newProduct={true} key={index} product={product} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
