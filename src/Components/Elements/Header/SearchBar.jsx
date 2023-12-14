import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { useState } from "react";
import { getSearch } from "../../../Service/Api";
import { useEffect } from "react";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(""); // State untuk query pencarian
  const [searchResults, setSearchResults] = useState([]); // State untuk hasil pencarian

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Mengupdate query pencarian saat input berubah
  };

  useEffect(() => {
    // Fungsi yang akan dipanggil saat komponen dimuat atau query pencarian berubah
    if (searchQuery.length > 4) {
      // Memastikan query tidak kosong
      getSearch(searchQuery) // Panggil fungsi getSearch dengan query
        .then((data) => {
          setSearchResults(data.results);
          console.log(data.results); // Mengupdate hasil pencarian dengan data dari API
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      // Kosongkan hasil pencarian jika query kosong
      setSearchResults([]);
    }
    if (searchQuery === "") {
      // Jika query kosong, kosongkan hasil pencarian
      setSearchResults([]);
    }
  }, [searchQuery]); // Bergantung pada perubahan searchQuery

  return (
    <div className="px-30 flex rounded-full bg-transparent border border-gray-300 shadow-inner  shadow-gray-200 mt-1 animate-pulse">
      <HiOutlineMagnifyingGlass className="text-lg ml-2 mt-1 text-gray-500" />
      <input
        type="text"
        placeholder="Cari..."
        id="name"
        name="name"
        autoComplete="name"
        onChange={handleSearch}
        value={searchQuery}
        className="bg-transparent px-2 w-full outline-none text-white"
      />
    </div>
  );
}
