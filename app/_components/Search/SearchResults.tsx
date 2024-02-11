import Link from "next/link";
import type { Result } from "@/app/global";

const SearchResult = ({id, name, category}: Result) => {
  return (
    <Link href={`/menu/${category}/dessert/${id}`}>
      <li className="hover:text-orange cursor-pointer ">
        <span className="font-semibold"> {name}</span> in{" "}
        <span className="font-semibold italic text-orange">
          {category === "Ice_Cream" ? "Ice Cream" : category}
        </span>
      </li>
    </Link>
  );
};

export default SearchResult;
