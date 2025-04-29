import Image from "next/image";
import HeroCarousel from "./heroCarousel";
import { getCollectionProducts } from "lib/shopify";

export async function Hero() {
  const hero_products = await getCollectionProducts({
    collection: "hero-section",
  });

  return (
    <section className={"bg-gray-100"}>
      <HeroCarousel products={hero_products} />
    </section>
  );
}
