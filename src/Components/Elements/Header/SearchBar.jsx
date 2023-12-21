import { HiOutlineMagnifyingGlass, HiXMark } from "react-icons/hi2";
import { useContext } from "react";
import { SearchFilter } from "../../../Context/FilterContext";

export function SearchBar() {
  const { searchQuery, handleSearch, searchQueryActive, handleClearSearch } =
    useContext(SearchFilter);

  return (
    <form
      className={`px-30 flex rounded-full bg-transparent border border-gray-300 shadow-inner shadow-gray-200 mt-1 animate-pulse ${
        searchQueryActive ? "active" : ""
      }`} // add "active" class when search is active
    >
      {/* Place the input and icon in a flex container */}
      <div className="flex items-center justify-between">
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
        {searchQueryActive && searchQuery ? (
          <HiXMark
            className="text-xl mr-2 mt-1 text-gray-500 cursor-pointer"
            onClick={handleClearSearch}
          />
        ) : (
          <HiOutlineMagnifyingGlass className="text-xl mr-2 mt-1 text-gray-500" />
        )}
      </div>
    </form>
  );
}
