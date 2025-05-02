import { Menu } from "lib/shopify/types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type NavHoverMenuProps = {
  menuList: Menu[];
};
export default function NavHoverMenu({ menuList }: NavHoverMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuList.map((item: Menu) => {
          if (item.items && item.items.length > 0) {
            return (
              <NavigationMenuItem key={item.path}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className={"grid w-[400px] gap-3 p-4 grid-cols-2"}>
                    {item.items.map((subItem: Menu) => {
                      return (
                        <NavigationMenuItem key={subItem.path}>
                          <Link
                            className={navigationMenuTriggerStyle()}
                            href={subItem.path}
                            prefetch={true}
                          >
                            {subItem.title}
                          </Link>
                        </NavigationMenuItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={item.path}>
                <Link
                  className={navigationMenuTriggerStyle()}
                  href={item.path}
                  prefetch={true}
                >
                  {item.title}
                </Link>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
