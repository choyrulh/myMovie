import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Api from "../../../Service/Api";
import AllCard from "../../Container/AllCard";

function Genre() {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Initialize empty search term
  const [searchResults, setSearchResults] = useState([]); // Initialize empty search results array
  const [cancel, setCancel] = useState(false); // Keeps track of cancel button state

  useEffect(() => {
    // Check for local storage data
    const localStorageGenres = localStorage.getItem("genres");
    if (localStorageGenres) {
      setGenres(JSON.parse(localStorageGenres));
    } else {
      getGenres();
    }

    const localStorageSearchResults = localStorage.getItem("searchResults");
    if (localStorageSearchResults) {
      setSearchResults(JSON.parse(localStorageSearchResults));
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
    } else {
      setSearchTerm(""); // Clear search term
      setSearchResults([]); // Clear search results
      setCancel(false); // Set cancel button inactive
    }

    if (genre_id) {
      getSearchByGenre(genre_id); // Fetch search results based on selected genre ID
      localStorage.setItem(`${genre_id}`, JSON.stringify(searchResults));
    }
  };

  const getSearchByGenre = async (genre_id) => {
    const searchByGenreResponse = await Api.getSearchByGenre(genre_id);
    const searchResults = searchByGenreResponse.results;
    setSearchResults(searchResults);
    console.log(searchResults);
  };

  if (!genres) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white">
      <select
        onChange={handleGenreChange}
        value={searchTerm}
        className="rounded-md shadow-md px-4 py-2 text-sm"
      >
        <option value="">{cancel ? "All Genres" : "Select Genre"}</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      {cancel && (
        <button
          onClick={handleGenreChange}
          className="ml-4 uppercase text-red-500 hover:text-red-900"
        >
          Cancel
        </button>
      )}
      {searchTerm && searchResults.length > 0 ? (
        <AllCard label={searchResults} />
      ) : searchTerm && searchResults.length === 0 ? (
        <p className="text-gray-400">No results found</p>
      ) : null}
    </div>
  );
}

export default Genre;
