import { getCollections } from '@/lib/shopify';
import CheckBoxFilter from '@/components/content/search/CheckBoxFilter';

export async function CheckBoxFilterList() {
  const collections = await getCollections();
  const formattedCollections = collections
    .map((collection) => ({
      title: collection.title,
      path: collection.handle,
    }))
    .filter(
      (collection) =>
        collection.title !== 'All' &&
        collection.title !== 'Digital Goods VAT Tax' &&
        collection.title !== 'hero-section' &&
        collection.title !== 'new-products' &&
        collection.title !== 'Startseite' &&
        collection.title !== 'featured-products'
    );

  return <CheckBoxFilter list={formattedCollections} />;
}
