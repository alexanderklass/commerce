import productFragment from './product';

const FILTERED_PRODUCTS_QUERY = `
  query filteredProducts($filters: [String!]) {
    products(first: 100, filters: {
      AND: $filters
    }) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

export default FILTERED_PRODUCTS_QUERY;

