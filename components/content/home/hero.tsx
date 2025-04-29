import Image from "next/image";
import hero_background from "../src/hero-background.jpg";
import HeroCarousel from "../components/heroCarousel";
import { getCollectionProducts } from "lib/shopify";

export async function Hero() {
  const hero_products = await getCollectionProducts({
    collection: "hero-section",
  });

  return (
    <section className={"w-full bg-gray-100"}>
      <div className={"relative w-full h-[750px]"}>
        <Image
          className={"w-full object-cover"}
          src={hero_background}
          fill
          alt={"fragrance background"}
        />
        <div
          className={
            "absolute top-[50%] left-[50%] bg-black/20 w-[900px] py-10 flex flex-col items-center gap-y-10 justify-center -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
          }
        >
          <div className={"flex text-center text-5xl flex-col"}>
            <p>Entdecke deine</p>
            <p className={"font-bold"}>Signature Scent!</p>
          </div>
          <HeroCarousel products={hero_products} />
          <div className={"flex flex-row gap-x-3"}>
            <button
              className={
                "bg-black cursor-pointer font-bold hover:bg-white hover:text-black transition-all border text-white px-4 py-2 rounded-lg"
              }
            >
              Jetzt entdecken
            </button>
            <button
              className={
                "bg-white cursor-pointer font-bold hover:bg-black hover:text-white hover:border-white text-black transition-all border border-black px-4 py-2 rounded-lg"
              }
            >
              Finde deinen Duft
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
