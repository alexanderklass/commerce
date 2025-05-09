import { getCollections } from "@/lib/shopify";
import CheckBoxFilter from "@/components/content/search/CheckBoxFilter";

export async function CheckBoxFilterList() {
  const collections = await getCollections();

  const formattedCollections = collections.map((collection) => ({
    title: collection.title,
    path: collection.handle,
  }));

  return <CheckBoxFilter list={formattedCollections} />;
}
