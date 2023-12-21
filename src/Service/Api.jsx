import axios from "axios";

const api_key = "b21eda71e3508823f3a70e04e795213b";
const axiosCreate = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  api_key: { api_key },
});

// Search movie
export const getSearch = async (q) => {
  const response = await axiosCreate.get(
    `/search/movie?api_key=${api_key}&query=${q}&page=1&`
  );
  return response.data;
};

// API MOVIE
const getNowPlaying = axiosCreate.get(
  "/movie/now_playing?page=1&api_key=" + api_key
);
const getGenres = async () => {
  const response = await axiosCreate.get(
    `/genre/movie/list?api_key=${api_key}&language=en`
  );
  return response.data;
};
const getPopular = axiosCreate.get("/movie/popular?page=1&api_key=" + api_key);
const getTopRated = axiosCreate.get(
  "/movie/top_rated?page=1&api_key=" + api_key
);
const getTrending = axiosCreate.get(
  "/trending/movie/week?page=1&type=all&api_key=" + api_key
);
const getUpcoming = axiosCreate.get(
  "/movie/upcoming?page=1&api_key=" + api_key
);

// API TV
const getTrendingShow = axiosCreate.get(
  "/trending/tv/week?page=1&type=all&api_key=" + api_key
);
const getGenrestv = async () => {
  const response = await axiosCreate.get(
    `/genre/tv/list?api_key=${api_key}&language=en`
  );
  return response.data;
};
const getPopularTV = axiosCreate.get("/tv/popular?page=1&api_key=" + api_key);
const getTopRatedTV = axiosCreate.get(
  "/tv/top_rated?page=1&api_key=" + api_key
);

//detail movie
export const getDetailMovie = async (movie_id) => {
  const response = await axiosCreate.get(
    `/movie/${movie_id}?api_key=${api_key}`
  );
  return response.data;
};

// search by genre
const getSearchByGenre = async (genre_id) => {
  const response = await axiosCreate.get(
    `/discover/movie?api_key=${api_key}&with_genres=${genre_id}`
  );
  return response.data;
};

export default {
  getNowPlaying,
  getGenres,
  getGenrestv,
  getPopular,
  getTopRated,
  getUpcoming,
  getTrending,
  getTrendingShow,
  getPopularTV,
  getTopRatedTV,
  getDetailMovie,
  getSearchByGenre,
};
