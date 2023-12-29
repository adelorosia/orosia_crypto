import Link from "next/link";
export const MENU_ITEMS = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "Analysis",
    href: "/analysis",
  },
  {
    title: "News",
    href: "/news",
  },
];

type TMenuItems = (typeof MENU_ITEMS)[number];

interface IMenuItemsProps {
  menuItem: TMenuItems;
  isActive: boolean;
  setIsScreenMenu:(isScreenMenu:boolean)=>void
}
const MenuItems = ({ menuItem, isActive,setIsScreenMenu }: IMenuItemsProps) => {
  return (
    <div className="flex lg:border-r px-2 last:border-none">
      <Link
        href={menuItem.href}
        className=" uppercase flex items-center gap-1 group h-full border-r last:border-none transform transition-all duration-300"
      >
        <p className={`text-3xl lg:text-sm font-Viga ${isActive && " text-primary "}`} onClick={()=>setIsScreenMenu(false)}>
          {menuItem.title}
        </p>
     
      </Link>
    </div>
  );
};

export default MenuItems;
