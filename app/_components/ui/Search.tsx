"use client";

import { useState } from "react";
import { type ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchFilteredMenu } from "@/app/_lib/helpers/supabase";
interface SearchProps {
  smHidden: boolean;
  search: string;
  onSearch: (input: string) => void;
}

const Search = ({ smHidden, search, onSearch }: SearchProps) => {
  const [searchResults, setSearchResults] = useState<MenuTypes[] | null>([]);
  const [status, setStatus] = useState<"loading" | "error" | "idle">("idle");

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setStatus("loading");
    onSearch(e.target.value);
    console.log(search);

    const { data: menu, error } = await fetchFilteredMenu(e.target.value);

    console.log(menu, error);

    !error && setSearchResults(menu);

    if (error) {
      setStatus("error");
      return;
    }
    console.log(status, searchResults);
  };

  return (
    <div
      className={`w-full  relative ${
        smHidden
          ? "hidden md:block max-w-md bg-white"
          : "block md:hidden w-full max-w-[485px]"
      }`}>
      <input
        type="text"
        value={search}
        onChange={(e) => handleSearch(e)}
        placeholder="Search"
        className="border rounded-md w-full  text-black px-4 py-2 focus:outline-none  focus:border-orange/70 text-sm "
      />
      <FaSearch className="absolute top-[30%] right-4 text-gray-400 text-sm" />
    </div>
  );
};

export default Search;
