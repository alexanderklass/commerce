import { getCollectionProducts } from "@/lib/shopify";
import FeaturedProduct from "@/components/content/home/featuredProduct";

export async function SingleFeaturedProduct({ index = 0 }: { index: number }) {
  const products = await getCollectionProducts({
    collection: "featured-products",
  });
  const product = products[index];
  if (!product) return null;
  return <FeaturedProduct product={product} />;
}
