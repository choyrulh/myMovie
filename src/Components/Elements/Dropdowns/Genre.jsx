import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Api from "../../../Service/Api";

function Genre() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Cek apakah data genre sudah disimpan di local storage
    const localStorageGenres = localStorage.getItem("genres");
    if (localStorageGenres) {
      // Jika ada, set state genre dengan data dari local storage
      const genresData = JSON.parse(localStorageGenres);
      setGenres(genresData);
    } else {
      // Jika tidak ada, lakukan request ke API
      getGenres();
    }
  }, []);

  const getGenres = async () => {
    const genresResponse = await Api.getGenres();
    const genres = genresResponse.genres;
    // Set state genre dengan data dari API
    setGenres(genres);
    // Simpan data genre ke dalam local storage
    localStorage.setItem("genres", JSON.stringify(genres));
    console.log(genres);
  };
  return (
    <div className="text-white">
      <select id="genre" name="name" autoComplete="name">
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Genre;
