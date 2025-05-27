import { getCollectionProducts } from '@/lib/shopify';
import FeaturedProduct from '@/components/content/home/featuredProduct';

export async function FeaturedProductList() {
  const products = await getCollectionProducts({
    collection: 'featured-products',
  });
  return (
    <>
      {products.map((product, index) => {
        return <FeaturedProduct key={product.handle} product={product} index={index} />;
      })}
    </>
  );
}
