"use client";

import Link from "next/link";
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

    const { data: menu, error } = await fetchFilteredMenu(e.target.value);

    !error && setSearchResults(menu);

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("idle");
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
        onChange={(e) => void handleSearch(e)}
        placeholder="Search"
        className="border rounded-md w-full  text-black px-4 py-2 focus:outline-none  focus:border-orange/70 text-sm "
      />
      <FaSearch className="absolute top-[30%] right-4 text-gray-400 text-sm" />
      {search?.length > 0 && (
        <ul className="bg-white w-full max-w-md  shadow-lg p-4 text-sm absolute h-screen max-h-48  overflow-scroll scrollbar-hide flex flex-col gap-4 rounded-lg">
          {status === "loading" && <p className="text-center">Loading...</p>}

          {status === "error" && (
            <p className="text-center">An error occurred!</p>
          )}

          {search.length > 0 && searchResults?.length === 0 && (
            <p>No results found</p>
          )}

          {searchResults &&
            searchResults.length > 0 &&
            searchResults.map((results) => (
              <Link
                href={`/menu/${results.category}/dessert/${results._id}`}
                key={results._id}>
                <li className="hover:text-orange/70 cursor-pointer">
                  {results.name}
                </li>
              </Link>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
