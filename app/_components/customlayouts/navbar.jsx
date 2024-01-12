"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdLogOut, IoMdLogIn } from "react-icons/io";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { signUserOut } from "@/app/_lib/helpers/supabase";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      const error = await signUserOut();

      if (error) {
        console.log(error)
        throw new Error("An error Occurred");
      }

      router.push("/auth/login");
      console.log("refreshed")
    } catch (error) {
      console.log("Error")
      setError(true);
    } finally {

      setLoading(false);
      console.log(loading, error)
    }
  };

  return (
    <nav className="-translate-x-1/2 fixed bottom-5 w-[90%] bg-white/20 backdrop-blur-[5px] shadow-lg rounded-full px-5 py-3  left-1/2  max-w-sm md:sticky md:h-screen md:-translate-x-0 md:left-0 md:bg-white md:rounded-none md:px-4 md:flex md:justify-center md:top-0 md:max-w-[5rem]">
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

        <li>
          <Link
            className={pathname === "/auth/signup" ? "active-link" : "nav-link"}
            href="/auth/signup">
            <IoMdLogIn />
          </Link>
        </li>
        <li>
          <button className="nav-link" onClick={handleSignOut}>
            <IoMdLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
