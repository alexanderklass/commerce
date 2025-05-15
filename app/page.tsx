import { Hero } from "@/components/content/home/hero";
import { Categories } from "@/components/content/home/categories";
import { News } from "@/components/content/home/news";
import OrderBenefits from "@/components/content/home/orderBenefits";
import FeaturedProducts from "@/components/content/home/featuredProducts";
import Faq from "@/components/content/home/FAQ";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Categories />
      <OrderBenefits />
      <FeaturedProducts/>
      <News />
      <Faq/>
    </div>
  );
}
