import { Hero } from "@/components/content/home/hero";
import { Categories } from "@/components/content/home/categories";
import { News } from "@/components/content/home/news";
import OrderBenefits from "@/components/content/home/orderBenefits";
import Faq from "@/components/content/home/FAQ";
import { SingleFeaturedProduct } from "@/components/content/home/singleFeaturedProduct";
import { BestSellerProducts } from "@/components/content/home/bestSellerProducts";
import FlaconBenefit from "@/components/content/home/flaconBenefit";
import ShopBenefits from "@/components/content/home/shopBenefits";
export const metadata = {
  description:
    "In unserem Onlineshop findest du eine große Auswahl an Parfümflakons – stilvoll, hochwertig und für jeden Anlass geeignet.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <OrderBenefits />
      <Categories />
      <BestSellerProducts />
      <News />
      <FlaconBenefit />
      <SingleFeaturedProduct index={0} />
      <ShopBenefits />
      <SingleFeaturedProduct index={1} />
      <Faq />
    </div>
  );
}
