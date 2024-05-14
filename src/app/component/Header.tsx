import Link from "next/link";
import MenuItems from "./MenuItem";
import { AiFillHome } from 'react-icons/ai';

function Header() {
    return ( 
        <div>
            <div className="">
                <MenuItems />
                

            </div>
        </div>
     );

}

export default Header;