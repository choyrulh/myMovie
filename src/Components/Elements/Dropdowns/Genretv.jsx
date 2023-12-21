import { useEffect } from "react";
import { useState } from "react";
import Api from "../../../Service/Api";

function Genretv() {
  const [genrestv, setGenrestv] = useState([]);

  useEffect(() => {
    const localStorageGenres = localStorage.getItem("genrestv");
    if (localStorageGenres) {
      const genresData = JSON.parse(localStorageGenres);
      setGenrestv(genresData);
    } else {
      getGenrestv();
    }
  }, []);

  const getGenrestv = async () => {
    const genrestvResponse = await Api.getGenrestv();
    const genrestv = genrestvResponse.genres;
    setGenrestv(genrestv);
    localStorage.setItem("genrestv", JSON.stringify(genrestv));
    console.log(genrestv);
  };

  return (
    <div className="text-white px-7 mt-4">
      <select id="name" name="name">
        {genrestv.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Genretv;
