import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useContext } from "react";
import { SearchFilter } from "../../../Context/FilterContext";

export function SearchBar() {
  const { searchQuery, handleSearch } = useContext(SearchFilter);

  return (
    <form className="px-30 flex rounded-full bg-transparent border border-gray-300 shadow-inner  shadow-gray-200 mt-1 animate-pulse">
      <HiOutlineMagnifyingGlass className="text-lg ml-2 mt-1 text-gray-500" />
      <input
        type="text"
        placeholder="Search Movie..."
        id="name"
        name="name"
        autoComplete="name"
        onChange={handleSearch}
        value={searchQuery}
        className="bg-transparent px-2 w-full outline-none text-white"
      />
    </form>
  );
}
