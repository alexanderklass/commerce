import HeroCarousel from "./heroCarousel";
import { getCollectionProducts, getCollections } from "lib/shopify";

export async function Hero() {
  const collectionList = await getCollections();
  const hideCollections = collectionList.filter((item) => {
    const title = item.title.toLowerCase();
    return (
      title !== "hero-section" &&
      title !== "new-products" &&
      title !== "digital goods vat tax" &&
      title !== "startseite" &&
      title !== "lattafa" &&
      title !== "all"
    );
  });
  return (
    <section className={"bg-gray-100 w-full"}>
      <HeroCarousel products={hideCollections} />
    </section>
  );
}
