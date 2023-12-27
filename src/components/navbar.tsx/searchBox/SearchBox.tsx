import { IoMdSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

interface ISearchBoxProps {
  isSearchBoxActive: boolean;
  setIsSearchBoxActive:(isSearchBoxActive:boolean)=>void
  
}
const SearchBox = ({ isSearchBoxActive,setIsSearchBoxActive }: ISearchBoxProps) => {
  return (
    <div className={`${isSearchBoxActive ? "w-full flex items-center bg-muted h-12 px-2 rounded-lg" : "hidden"} `}>
      <IoMdSearch className="h-7 w-7"/>
      <input type="text" className="w-full h-full bg-transparent outline-none px-2" placeholder="Search"/>
      <IoCloseSharp className="h-7 w-7 cursor-pointer" onClick={()=>setIsSearchBoxActive(false)}/>
    </div>
  );
};

export default SearchBox;
