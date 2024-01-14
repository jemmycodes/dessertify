import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className="w-full  max-w-md relative hidden md:block">
      <input
        type="text"
        placeholder="Search"
        className="border rounded-md w-full  text-black px-4 py-2 focus:outline-none  focus:border-orange/70 text-sm bg-transparent"
      />
      <FaSearch className="absolute top-[30%] right-4 text-gray-400 text-sm" />
    </div>
  );
};

export default Search;
