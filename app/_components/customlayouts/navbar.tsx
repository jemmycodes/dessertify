"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";
import { usePathname } from "next/navigation";
import { IoMdLogOut, IoMdLogIn } from "react-icons/io";
import { signUserOut } from "@/app/_lib/supabase/client/auth";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
const Navbar = () => {
  const pathname = usePathname();

  const handleSignOut = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await signUserOut();
  };

  return (
    <nav className="-translate-x-1/2 fixed bottom-5 w-[90%] bg-white/20 backdrop-blur-[5px] shadow-lg rounded-full px-5 py-3  left-1/2  max-w-sm md:sticky md:h-screen md:-translate-x-0 md:left-0 md:bg-white md:w-full md:rounded-none md:flex md:flex-col md:justify-between md:top-0 ">
      <Link href="/" className="w-fit  hidden md:flex">
        <Image src={logo} height={70} width={70} alt="Logo" />
      </Link>
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
            className={pathname.includes("/menu") ? "active-link" : "nav-link"}
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

        <li className="md:hidden">
          <Link
            className={pathname === "/auth/signup" ? "active-link" : "nav-link"}
            href="/auth/signup">
            <IoMdLogIn />
          </Link>
        </li>
      </ul>
      <button
        className="nav-link text-2xl hidden md:block"
        onClick={(event) => {
          void handleSignOut(event);
        }}>
        <IoMdLogOut />
      </button>
    </nav>
  );
};

export default Navbar;
