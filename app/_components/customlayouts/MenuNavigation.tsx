"use client";

import Link from "next/link";
import Image from "next/image";
import donut from "@/public/donut.svg";
import cookies from "@/public/cookies.svg";
import dessert from "@/public/dessert.svg";
import icecream from "@/public/icecream.svg";
import { usePathname } from "next/navigation";

const MenuNavigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="menu-nav">
        <li>
          <Link
            href="/menu/all"
            className={pathname.includes("all") ? "active" : "not-active"}>
            <Image src={dessert} alt="donut" width={20} height={20} />
            <p>Desserts</p>
          </Link>
        </li>
        <li>
          <Link
            href="/menu/Donut"
            className={pathname.includes("/Donut") ? "active" : "not-active"}>
            <Image src={donut} alt="donut" width={20} height={20} />
            <p>Donuts</p>
          </Link>
        </li>
        <li>
          <Link
            href="/menu/Cookie"
            className={pathname.includes("Cookie") ? "active" : "not-active"}>
            <Image src={cookies} alt="donut" width={20} height={20} />
            <p>Cookie</p>
          </Link>
        </li>
        <li>
          <Link
            href="/menu/Ice_Cream"
            className={
              pathname.includes("Ice_Cream") ? "active" : "not-active"
            }>
            <Image src={icecream} alt="donut" width={20} height={20} />
            <p> Ice Cream</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNavigation;
