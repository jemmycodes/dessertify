"use client"

import Link from "next/link";
import Image from "next/image";
import donut from "@/public/donut.svg";
import { usePathname } from "next/navigation";
import cookies from "@/public/cookies.svg";
import dessert from "@/public/dessert.svg";
import icecream from "@/public/icecream.svg";

const MenuNavigation = () => {
const pathname = usePathname()
    console.log(pathname)
    
  return (
    <nav>
      <ul className="menu-nav">
        <li>
          <Link href="Desserts" className="">
            <Image src={dessert} alt="donut" width={20} height={20} />
            <p>Desserts</p>
          </Link>
        </li>
        <li>
          <Link href="Donut">
            <Image src={icecream} alt="donut" width={20} height={20} />
            <p>Donuts</p>
          </Link>
        </li>
        <li>
          <Link href="Cookie">
            <Image src={cookies} alt="donut" width={20} height={20} />
            <p>Cookie</p>
          </Link>
        </li>
        <li>
          <Link href="Ice_Cream">
            <Image src={donut} alt="donut" width={20} height={20} />
            <p> Ice Cream</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNavigation;
