import { cn } from "../../lib/utils.ts";
import { menuItems, menuItemsLogIn } from "./menuItem.ts";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu.tsx";

const isLogin = false;

const NavMenu = () => {
  const items = isLogin ? menuItems : menuItemsLogIn;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((menuItem, index) => (
          <ListItem key={index} title={menuItem.title} href={menuItem.href} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

export default NavMenu;
