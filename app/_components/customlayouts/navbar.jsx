"use client";

import Link from "next/link";
import { IoMdLogOut, IoMdLogIn } from "react-icons/io";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="-translate-x-1/2 fixed bottom-5 w-[90%] bg-white/20 backdrop-blur-lg shadow-lg rounded-full px-5 py-3  left-1/2  max-w-sm md:sticky md:h-screen md:-translate-x-0 md:left-0 md:bg-white md:rounded-none md:px-4 md:flex md:justify-center md:top-0 md:max-w-[5rem]">
      <ul className="flex justify-between text-xl text-black/80 items-center md:flex-col md:justify-center md:gap-4 ">
        <li>
          <Link
            className={pathname === "/profile" ? "active-link" : "nav-link"}
            href="/profile">
            <FaUser />
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/menu" ? "active-link" : "nav-link"}
            href="/menu">
            <MdOutlineRestaurantMenu />
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/cart" ? "active-link" : "nav-link"}
            href="/cart">
            <FaShoppingCart />
          </Link>
        </li>

        <li>
          <Link
            className={pathname === "/auth/signup" ? "active-link" : "nav-link"}
            href="/auth/signup">
            <IoMdLogOut />
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/auth/login" ? "active-link" : "nav-link"}
            href="/auth/login">
            <IoMdLogIn />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
