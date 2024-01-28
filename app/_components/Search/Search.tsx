"use client";

import { FaSearch } from "react-icons/fa";
import type { Result } from "@/app/global";
import { useState, useEffect } from "react";
import SearchResult from "./SearchResults";
import { usePathname } from "next/navigation";
import SearchResultPane from "./SearchResultPane";
import { fetchData } from "@/app/_lib/helpers/utils";
interface SearchProps {
  smHidden: boolean;
  search: string;
  onSearch: (input: string) => void;
}

const Search = ({ smHidden, search, onSearch }: SearchProps) => {
  const pathname = usePathname();

  const [searchResults, setSearchResults] = useState<Result[] | null>([]);
  const [status, setStatus] = useState<"loading" | "error" | "idle">("idle");

  useEffect(() => {
    onSearch("");
    // eslint-disable-next-line
  }, [pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      void (async () => {
        try {
          const results = await fetchData<Result>(
            `/api/menu/search?query=${search}`
          );
          setStatus("idle");
          setSearchResults(results);
        } catch (error) {
          setStatus("error");
        }
      })();
    }, 200);

    return () => clearTimeout(timeout);
  }, [search]);

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
        onChange={(e) => {
          setStatus("loading");
          onSearch(e.target.value);
        }}
        placeholder="Search"
        className="border rounded-md w-full  text-black px-4 py-2 focus:outline-none  focus:border-orange/70 text-sm "
      />
      <FaSearch className="absolute top-[30%] right-4 text-gray-400 text-sm" />

      {search !== "" && (
        <SearchResultPane status={status}>
          {searchResults && searchResults.length ? (
            searchResults.map((result) => (
              <SearchResult {...result} key={result.id} />
            ))
          ) : (
            <p>
              No result(s) found for
              <span className="font-semibold text-orange ">
                &quot;{search}&quot;
              </span>
            </p>
          )}
        </SearchResultPane>
      )}
    </div>
  );
};

export default Search;
