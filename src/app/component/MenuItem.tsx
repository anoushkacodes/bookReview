import Link from "next/link";
import DarkMoreSwitch from "./DarkModeSwitch";
function MenuItems() {
    return ( 
        <div className="flex justify-between items-center p-3 max-w-[1620px] mx-auto">
        <div className="text-2xl flex gap-6">
        <Link href="/about" className="">About</Link>
        <Link href="/" className=""> Home</Link>
        </div>
        <div className="flex items-center gap-4">
            <DarkMoreSwitch/>
        <Link href={"/"} className="flex items-center">
            <span className="text-3xl font-bold bg-amber-500 py-2 px-2 rounded-lg">BooksGram</span>
        </Link>
        </div>
        </div>
       
     );
}

export default MenuItems;