import Link from "next/link";
import type { Result } from "../global";



const SearchResult = ({ id, category, name }: Result) => {
  return (
    <Link
      href={`/menu/${category}/dessert/${id}`}>
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
