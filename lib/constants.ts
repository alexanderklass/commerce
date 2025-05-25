export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  { title: 'Aktueller Trend', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false },
  { title: 'Neu im Sortiment', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Preis: niedrig aufsteigend', slug: 'price-asc', sortKey: 'PRICE', reverse: false },
  { title: 'Preis: hoch absteigend', slug: 'price-desc', sortKey: 'PRICE', reverse: true },
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart',
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2024-01/graphql.json';
