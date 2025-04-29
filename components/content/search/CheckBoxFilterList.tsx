import { getCollections } from "@/lib/shopify";
import CheckBoxFilter from "@/components/content/search/CheckBoxFilter";

export async function CheckBoxFilterList() {
  const collections = await getCollections();
  return <CheckBoxFilter list={collections} />;
}
