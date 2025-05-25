import { getCollections } from '@/lib/shopify';
import CategoriesProduct from './categoriesProduct';

export async function Categories() {
  const categories = await getCollections();
  const filteredCategories = categories.filter((item) => {
    const collectionTitle = item.title.toLowerCase();
    return (
      collectionTitle === ('damendüfte' as string) ||
      collectionTitle === ('herrendüfte' as string) ||
      collectionTitle === ('make-up' as string) ||
      collectionTitle === ('unisex-düfte' as string)
    );
  });
  return (
    <section className={'flex w-full flex-col items-center justify-center gap-y-10 bg-gray-100 py-16'}>
      <p className={'text-center text-4xl font-bold text-black'}>KAUFE NACH KATEGORIE</p>
      <div className={'flex w-[1400px] flex-row items-center justify-center gap-x-5'}>
        {filteredCategories.map((category, index) => {
          return (
            <CategoriesProduct image={category.image?.url} href={category.path} key={index} title={category.title} />
          );
        })}
      </div>
    </section>
  );
}
