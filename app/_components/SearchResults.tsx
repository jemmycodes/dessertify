import Link from "next/link";

const SearchResult = ({ result }: { result: MenuTypes }) => {
  return (
    <Link
      href={`/menu/${result.category}/dessert/${result._id}`}
      key={result._id}>
      <li className="hover:text-orange cursor-pointer ">
        <span className="font-semibold"> {result.name}</span> in{" "}
        <span className="font-semibold italic text-orange">
          {result.category === "Ice_Cream" ? "Ice Cream" : result.category}
        </span>
      </li>
    </Link>
  );
};

export default SearchResult;
