import { getProducts } from "@/lib/shopify";
import Link from "next/link";
import NewsProduct from "./product";

export async function News() {
  const newestProducts = await getProducts({
    sortKey: "CREATED_AT",
    reverse: true,
  });
  const getNewestProducts = newestProducts.filter((item) => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return new Date(item.updatedAt) > thirtyDaysAgo;
  });

  const fourNewestProducts = getNewestProducts.slice(0, 4);

  if (!fourNewestProducts) return null;
  return (
    <section
      className={"w-full flex items-center justify-center flex-col py-8"}
    >
      <div
        className={
          "w-[1400px] gap-y-10 flex flex-col items-start justify-center"
        }
      >
        <div className={"flex w-full flex-row items-center"}>
          <p className={"text-4xl font-bold text-black text-center mx-auto"}>
            Neuheiten
          </p>
          <Link
            className={"underline self-end text-black underline-offset-3"}
            href={"/search?sort=latest-desc"}
          >
            Alle anzeigen
          </Link>
        </div>
        <div className={"flex w-full flex-row gap-x-3"}>
          {fourNewestProducts.map((product, index) => {
            return (
              <NewsProduct newProduct={true} key={index} product={product} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
