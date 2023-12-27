"use client"
import { useState } from "react";
import MenuItems, { MENU_ITEMS } from "./MenuItems";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import Brand from "../brand/Brand";

interface IScreenSmallProps{
    setIsScreenMenu:(isScreenMenu:boolean)=>void
}
const ScreenSmall = ({setIsScreenMenu}:IScreenSmallProps) => {
    const pathName = usePathname();
    return (
        <div className="lg:hidden flex w-full transform duration-500 transition-all -translate-x flex-col items-center justify-center h-screen gap-10 bg-foreground/90 fixed ring-0 top-0 inset-0 text-background ">

            <IoCloseSharp className="w-10 h-10 cursor-pointer" onClick={()=>setIsScreenMenu(false)}/>
            <div className="text-3xl border-b border-foreground pb-12 w-full flex justify-center">
            <Brand isScreenMenu/>
            </div>
             {MENU_ITEMS.map((items) => {
              const isActive = pathName.startsWith(items.href);
              return (
                <MenuItems
                  isActive={isActive}
                  menuItem={items}
                  key={items.title}
                />
              );
            })}
        </div>
    );
}

export default ScreenSmall;