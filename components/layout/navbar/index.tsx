import CartModal from "components/cart/modal";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("main-menu");
  return (
    <nav className="sticky top-0 z-10 left-0 right-0 bg-white flex w-full items-center justify-center text-black p-4 lg:px-6">
      <div className={"flex items-center sm:w-[1400px] justify-between"}>
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full justify-between items-center">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-lg font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
              <p className={"text-sm text-gray-500"}>Fragrance premium</p>
            </div>
          </Link>
          <div className="flex">
            {menu.length ? (
              <ul className="hidden gap-6 text-md md:flex md:items-center">
                {menu.map((item: Menu) => {
                  //TODO create component
                  if (item.items) return <button key={item.title} className={"text-neutral-700 cursor-pointer"}>{item.title}</button>;
                  return (
                    <li key={item.title}>
                      <Link
                        href={item.path}
                        prefetch={true}
                        className="text-neutral-700 underline-offset-4 hover:text-black hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
          <div className="flex">
            <CartModal />
          </div>
        </div>
      </div>
    </nav>
  );
}
