"use client";

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
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
            <Image src={dessert as StaticImageData} alt="donut" width={20} height={20} />
            <p>Desserts</p>
          </Link>
        </li>
        <li>
          <Link
            href="/menu/Donut"
            className={pathname.includes("/Donut") ? "active" : "not-active"}>
            <Image src={donut as StaticImageData} alt="donut" width={20} height={20} />
            <p>Donuts</p>
          </Link>
        </li>
        <li>
          <Link
            href="/menu/Cookie"
            className={pathname.includes("Cookie") ? "active" : "not-active"}>
            <Image src={cookies as StaticImageData} alt="donut" width={20} height={20} />
            <p>Cookie</p>
          </Link>
        </li>
        <li>
          <Link
            href="/menu/Ice_Cream"
            className={
              pathname.includes("Ice_Cream") ? "active" : "not-active"
            }>
            <Image src={icecream as StaticImageData} alt="donut" width={20} height={20} />
            <p> Ice Cream</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNavigation;
