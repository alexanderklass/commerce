import Grid from "components/grid";
import { defaultSort, sorting } from "lib/constants";
import { getProducts, getCollectionProducts } from "lib/shopify";
import type { Product as ProductType } from "@/lib/shopify/types";
import Product from "../../components/content/home/product";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const {
    sort,
    q: searchValueRaw,
    filter,
  } = searchParams as { [key: string]: string | string[] };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const searchValue = Array.isArray(searchValueRaw)
    ? searchValueRaw[0]
    : searchValueRaw;

  let products: ProductType[] = [];

  const collectionFilters = Array.isArray(filter)
    ? filter
        .filter((f) => f.startsWith("collection:"))
        .map((f) => f.replace("collection:", ""))
    : filter?.startsWith("collection:")
      ? [filter.replace("collection:", "")]
      : [];

  if (collectionFilters.length > 0) {
    const collectionProducts = await Promise.all(
      collectionFilters.map((collection) =>
        getCollectionProducts({
          collection,
          sortKey: "RELEVANCE",
          reverse: false,
        }),
      ),
    );
    products = collectionProducts.flat();

    if (searchValue) {
      const searchLower = searchValue.toLowerCase();
      products = products.filter((product) =>
        product.title.toLowerCase().includes(searchLower),
      );
    }

    if (sortKey === "PRICE") {
      products.sort((a, b) => {
        const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
        const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
        return reverse ? priceB - priceA : priceA - priceB;
      });
    } else if (sortKey === "CREATED_AT") {
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

  const resultsText = products.length > 1 ? "results" : "result";

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? "There are no products that match "
            : `Showing ${products.length} ${resultsText} for `}
          {searchValue && (
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          )}
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Product key={product?.handle + index} product={product} />
          ))}
        </Grid>
      ) : null}
    </>
  );
}
