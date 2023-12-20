import { useContext } from "react";
import { GenreFilter } from "../../../Context/GenreFilterContext";

function Genre() {
  const { genres, searchTerm, handleGenreChange, cancel } =
    useContext(GenreFilter);

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
    </div>
  );
}

export default Genre;
