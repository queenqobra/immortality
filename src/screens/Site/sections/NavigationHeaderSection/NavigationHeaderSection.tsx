import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navItems = [
  {
    label: "вход",
    fontFamily: "[font-family:'Literature_Decor-Regular',Helvetica]",
  },
  { label: "сетка", fontFamily: "[font-family:'Lighthaus-Regular',Helvetica]" },
  {
    label: "турниры",
    fontFamily: "[font-family:'Literature_Decor-Regular',Helvetica]",
  },
  {
    label: "профиль",
    fontFamily: "[font-family:'Literature_Decor-Regular',Helvetica]",
  },
];

export const NavigationHeaderSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <header className="flex flex-col w-full items-center bg-transparent relative z-50">
      {/* Main navigation bar */}
      <div className="flex h-[58px] items-center justify-center gap-[195px] pt-[17px] pb-2 px-[285px] relative self-stretch w-full shadow-[0px_4px_6.8px_5px_#00000085] bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(45,0,0,1)_49%,rgba(0,0,0,1)_97%)]">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[195px]">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  className={`flex items-center justify-center w-[70px] h-[30px] ${item.fontFamily} text-white text-[10px] tracking-[0.30px] leading-[0.1px] font-normal text-center cursor-pointer hover:opacity-80 transition-opacity bg-transparent`}
                  onClick={() => setActiveItem(item.label)}
                  style={{ textDecoration: "none" }}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Logo area - overlaps the nav bar */}
      <div className="flex flex-col w-[279px] h-px items-center justify-center gap-2.5 px-[47px] py-0 relative mb-[-1.00px]">
        <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto] mt-[-57.00px] mb-[-56.00px]">
          <img
            className="relative w-[180px] h-[114px] object-contain"
            alt="Logo"
            src="/logo-white.png"
          />
        </div>
      </div>
    </header>
  );
};
