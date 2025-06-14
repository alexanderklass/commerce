import { defaultSort, sorting } from 'lib/constants';
import { getProducts, getCollectionProducts } from 'lib/shopify';
import type { Product as ProductType } from '@/lib/shopify/types';
import PaginationProducts from '@/components/layout/search/paginationProducts';
export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.',
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValueRaw, filter } = searchParams as { [key: string]: string | string[] };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const searchValue = Array.isArray(searchValueRaw) ? searchValueRaw[0] : searchValueRaw;

  let products: ProductType[] = [];

  const collectionFilters = Array.isArray(filter)
    ? filter.filter((f) => f.startsWith('collection:')).map((f) => f.replace('collection:', ''))
    : filter?.startsWith('collection:')
      ? [filter.replace('collection:', '')]
      : [];

  if (collectionFilters.length > 0) {
    const collectionProducts = await Promise.all(
      collectionFilters.map((collection) =>
        getCollectionProducts({
          collection,
          sortKey: 'RELEVANCE',
          reverse: false,
        })
      )
    );
    products = collectionProducts.flat();

    if (searchValue) {
      const searchLower = searchValue.toLowerCase();
      products = products.filter((product) => product.title.toLowerCase().includes(searchLower));
    }

    if (sortKey === 'PRICE') {
      products.sort((a, b) => {
        const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
        const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
        return reverse ? priceB - priceA : priceA - priceB;
      });
    } else if (sortKey === 'CREATED_AT') {
      products.sort((a, b) => {
        const dateA = new Date(a.updatedAt).getTime();
        const dateB = new Date(b.updatedAt).getTime();
        return reverse ? dateB - dateA : dateA - dateB;
      });
    }
  } else {
    products = await getProducts({
      sortKey,
      reverse,
      query: searchValue,
    });
  }

  return (
    <>
      {searchValue ? (
        <p className="mb-4">{products.length === 0 && `Keine Produkte gefunden mit "${searchValue}"`}</p>
      ) : null}
      <PaginationProducts products={products} />
    </>
  );
}
