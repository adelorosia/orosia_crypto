"use client";
import MaxWithWrapper from "@/components/wrapper/MaxWithWrapper";
import { ImSearch } from "react-icons/im";
import Brand from "../brand/Brand";
import MenuItems, { MENU_ITEMS } from "./MenuItems";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoMdLogIn } from "react-icons/io";
import SearchBox from "../searchBox/SearchBox";
import { useState } from "react";
import ScreenSmall from "./ScreenSmall";

const MainMenu = () => {
  const pathName = usePathname();
  const [isSearchBoxActive, setIsSearchBoxActive] = useState(false);
  const [isScreenMenu, setIsScreenMenu] = useState(false);
  return (
    <>
      <MaxWithWrapper className="flex items-center py-4">
        <div
          className={`${isSearchBoxActive ? "flex h-full w-full" : "hidden"} `}
        >
          <SearchBox
            isSearchBoxActive={isSearchBoxActive}
            setIsSearchBoxActive={setIsSearchBoxActive}
          />
        </div>
        <div
          className={`${
            isSearchBoxActive
              ? "hidden"
              : "w-full flex justify-between items-center gap-4"
          }`}
        >
          <div className="flex gap-4 items-center">
            <HiMiniBars3CenterLeft className="lg:hidden w-7 h-7 cursor-pointer" onClick={()=>setIsScreenMenu(true)}/>
            <div className="hidden lg:flex">
              <Brand isScreenMenu={isScreenMenu}/>
            </div>
            <div
              className="flex items-center justify-center w-12 h-12 bg-muted rounded-full cursor-pointer"
              onClick={() => {
                setIsSearchBoxActive(true);
              }}
            >
              <ImSearch className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </div>
            <div className="hidden lg:flex gap-4 h-full">
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
          </div>
          <div className="lg:hidden">
            <Brand isScreenMenu={isScreenMenu}/>
          </div>
          <div>
            <Button variant="outline" className="hidden lg:flex font-Viga">
              Login/Register
            </Button>
            <IoMdLogIn className="w-7 h-7 lg:hidden cursor-pointer" />
          </div>
        </div>
      </MaxWithWrapper>
      <div className={`${isScreenMenu?"flex":"hidden"}`}>
        <ScreenSmall setIsScreenMenu={setIsScreenMenu}/>
      </div>
    </>
  );
};

export default MainMenu;
