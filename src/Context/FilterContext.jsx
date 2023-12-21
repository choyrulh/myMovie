// make context for filter
import { createContext, useEffect, useState } from "react";
import { getSearch } from "../Service/Api";
import { PropTypes } from "prop-types";

const SearchFilterContext = createContext();

const SearchFilterProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State untuk query pencarian
  const [searchResults, setSearchResults] = useState([]); // State untuk hasil pencarian
  const [searchQueryActive, setSearchQueryActive] = useState(false);
  const [isFetchingQuery, setIsFetchingQuery] = useState(false);
  const handleSearch = (event) => {
    // Fungsi yang akan dipanggil saat input berubah
    event.preventDefault(); //
    setIsFetchingQuery(true);
    setSearchQuery(event.target.value); // Mengupdate query pencarian saat input berubah
    setSearchQueryActive(true);
  };

  const handleClearSearch = () => {
    setSearchQuery(""); // Mengosongkan query pencarian
    setSearchQueryActive(false);
  };

  useEffect(() => {
    // Fungsi yang akan dipanggil saat komponen dimuat atau query pencarian berubah
    if (searchQuery.length > 4) {
      // Memastikan query tidak kosong
      getSearch(searchQuery) // Panggil fungsi getSearch dengan query
        .then((data) => {
          setSearchResults(data.results);
          setIsFetchingQuery(false);
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
    <SearchFilterContext.Provider
      value={{
        handleSearch,
        searchQuery,
        searchResults,
        searchQueryActive,
        setSearchQueryActive,
        handleClearSearch,
        isFetchingQuery,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};

SearchFilterProvider.propTypes = { children: PropTypes.node.isRequired };

export const SearchFilter = SearchFilterContext;

export default SearchFilterProvider;
