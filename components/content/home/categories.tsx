import { getCollections } from "@/lib/shopify";
import CategoriesProduct from "./categoriesProduct";

export async function Categories() {
  const categories = await getCollections();
  const filteredCategories = categories.filter(
    (category) =>
      category.title.toLowerCase() !== "hero-section" &&
      category.title.toLowerCase() !== "startseite" &&
      category.title.toLowerCase() !== "all" &&
      category.title.toLowerCase() !== "digital goods vat tax" &&
      category.title.toLowerCase() !== "new-products" &&
      category.title.toLowerCase() !== "lattafa" &&
      category.title.toLowerCase() !== "featured-products",
  );
  //TODO Configure here collection
  return (
    <section
      className={
        "w-full flex items-center justify-center flex-col gap-y-10 bg-gray-100 py-16"
      }
    >
      <p className={"text-4xl font-bold text-black text-center"}>
        KAUFE NACH KATEGORIE
      </p>
      <div
        className={
          "w-[1400px] gap-x-5 flex flex-row items-center justify-center"
        }
      >
        {filteredCategories.map((category, index) => {
          return (
            <CategoriesProduct
              image={category.image?.url}
              href={category.path}
              key={index}
              title={category.title}
            />
          );
        })}
      </div>
    </section>
  );
}
