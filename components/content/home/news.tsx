import { getCollectionProducts } from "../../../lib/shopify";
import Link from "next/link";
import NewsProduct from "./product";

export async function News() {
  const newestProducts = await getCollectionProducts({
    collection: "new-products",
  });

  const products = [
    ...newestProducts,
    ...newestProducts,
  ];

  if (!newestProducts) return null;
  return (
    <section
      className={
        "w-full flex items-center justify-center flex-col gap-y-10 bg-gray-100 py-16"
      }
    >
      <div
        className={
          "w-[1400px] gap-y-10 flex flex-col items-center justify-center"
        }
      >
        <div className={"flex w-full items-center justify-between"}>
          <p className={"text-3xl font-bold text-black text-center"}>
            Neuheiten
          </p>
          <Link
            className={"underline text-black underline-offset-3"}
            href={"/search/new-products"}
          >
            Alle anzeigen
          </Link>
        </div>
        <div className={"flex flex-row gap-x-3"}>
          {products.map((product, index) => {
            return <NewsProduct newProduct={true} key={index} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}
