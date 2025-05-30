import { getCollectionProducts } from "@/lib/shopify";
import FeaturedProduct from "@/components/content/home/featuredProduct";

export async function SingleFeaturedProduct({
  index = 0,
  reverse,
}: {
  index: number;
  reverse?: boolean;
}) {
  const products = await getCollectionProducts({
    collection: "featured-products",
  });
  const product = products[index];
  if (!product) return null;
  return <FeaturedProduct reverse={reverse} product={product} />;
}
