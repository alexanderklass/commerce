import { Hero } from "../components/content/home/hero";
import { Categories } from "../components/content/home/categories";
import { News } from "../components/content/home/news";

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
      <News />
    </div>
  );
}
