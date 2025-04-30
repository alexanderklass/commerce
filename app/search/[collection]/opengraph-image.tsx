import OpengraphImage from 'components/opengraph-image';
import { getCollection } from 'lib/shopify';

export const dynamic = 'force-static';
export const revalidate = false;

export default async function Image({
  params
}: {
  params: { collection: string };
}) {
  const collection = await getCollection(params.collection);
  const title = collection?.seo?.title || collection?.title;

  return await OpengraphImage({ title });
}
