import { createContext, useEffect, useState } from "react";
import Api from "../Service/Api";
import { PropTypes } from "prop-types";
const GenreFilterContext = createContext();

const GenreFilterProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Initialize empty search term
  const [searchResultsGenres, setSearchResultsGenres] = useState([]); // Initialize empty search results array
  const [cancel, setCancel] = useState(false); // Keeps track of cancel button state
  const [searchGenresActive, setSearchGenresActive] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    // Check for local storage data
    const localStorageGenres = localStorage.getItem("genres");
    if (localStorageGenres) {
      setGenres(JSON.parse(localStorageGenres));
    } else {
      getGenres();
    }

    const localStorageSearchResultsGenres = localStorage.getItem(
      "searchResultsGenres"
    );
    if (localStorageSearchResultsGenres) {
      setSearchResultsGenres(JSON.parse(localStorageSearchResultsGenres));
    }
  }, []);

  const getGenres = async () => {
    const genresResponse = await Api.getGenres();
    const genres = genresResponse.genres;
    setGenres(genres);

    localStorage.setItem("genres", JSON.stringify(genres));
  };

  // Handle genre change
  const handleGenreChange = (event) => {
    const genre_id = event.target.value;
    if (genre_id) {
      setSearchTerm(genre_id); // Set search term to selected genre ID
      setCancel(true); // Set cancel button active
      setSearchGenresActive(true);
    } else {
      setSearchTerm(""); // Clear search term
      setSearchResultsGenres([]); // Clear search results
      setCancel(false); // Set cancel button inactive
    }

    if (genre_id) {
      getSearchByGenre(genre_id); // Fetch search results based on selected genre ID
      localStorage.setItem(`${genre_id}`, JSON.stringify(searchResultsGenres));
    }
  };

  const getSearchByGenre = async (genre_id) => {
    setIsFetching(true); // Indicate data fetching is starting
    try {
      const searchByGenreResponse = await Api.getSearchByGenre(genre_id);
      const searchResultsGenres = searchByGenreResponse.results;
      setSearchResultsGenres(searchResultsGenres);
      console.log(searchResultsGenres);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching search results:", error);
    } finally {
      // Indicate data fetching is complete
      setIsFetching(false);
    }
  };

  return (
    <GenreFilterContext.Provider
      value={{
        genres,
        searchTerm,
        searchResultsGenres,
        cancel,
        handleGenreChange,
        searchGenresActive,
        setSearchGenresActive,
        isFetching,
      }}
    >
      {children}
    </GenreFilterContext.Provider>
  );
};

GenreFilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const GenreFilter = GenreFilterContext;

export default GenreFilterProvider;
