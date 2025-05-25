import { getMenu } from '@/lib/shopify';
import Link from 'next/link';

export async function FooterLinks() {
  const menu = await getMenu('main-menu');
  const menuItemsWithoutLinkTree = menu
    .filter((item) => !item.items?.length)
    .map((item) => ({
      ...item,
      title: item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase(),
    }));

  return (
    <div className={'flex max-w-[250px] flex-col gap-y-3'}>
      <p className={'font-bold'}>Links</p>
      <div className={'flex flex-col gap-y-1'}>
        {menuItemsWithoutLinkTree.map((menuItem) => {
          return (
            <Link className={'underline-offset-2 hover:underline'} key={menuItem.path} href={menuItem.path}>
              {menuItem.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
