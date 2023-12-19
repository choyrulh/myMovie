// make context for filter
import { createContext, useEffect, useState } from "react";
import { getSearch } from "../Service/Api";

const SearchFilterContext = createContext({
  searchResults: [],
});

const SearchFilterProvider = ({ children }) => {
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
  console.log(searchResults);

  return (
    <SearchFilterContext.Provider
      value={{ handleSearch, searchQuery, searchResults }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};

export const SearchFilter = SearchFilterContext;

export default SearchFilterProvider;
