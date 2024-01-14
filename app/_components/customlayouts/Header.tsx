"use client";

import Link from "next/link";
import Search from "../ui/Search";
import { RxAvatar } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const heading = pathname.split("/")[1];

  return (
    <header className="bg-white text-2xl py-4 px-3 sticky top-0 left-0 shadow-lg">
      <div className="max-w-6xl flex gap-4   items-center justify-between">
        <Link href="/profile" className="md:hidden">
          <RxAvatar />
        </Link>
        <Search />
        <h1 className="uppercase text-lg  font-semibold md:hidden">
          {heading}
        </h1>
        <Link href="/cart">
          <RxAvatar className="hidden md:block" />
          <FaShoppingCart className="md:hidden" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
