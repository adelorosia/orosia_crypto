import Image from "next/image";
import Link from "next/link";
import { BiLogoSlack } from "react-icons/bi";
import { string } from "yup";

interface IBrandProps{
    isScreenMenu?:boolean
}
const Brand = ({isScreenMenu}:IBrandProps) => {
    return (
        <Link href="/" className="flex items-center gap-1 cursor-pointer">
            <Image src="/images/logo.png" width={50} height={50} alt="logo" />
            <p className={`${isScreenMenu && "text-5xl"} font-Salsa font-bold text-2xl md:text-3xl lg:text-4xl tracking-wider `}>Orosi<span className={`text-primary`}>a</span></p>
        </Link>
    );
}

export default Brand;