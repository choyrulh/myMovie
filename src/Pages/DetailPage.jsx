import { useEffect } from "react";
import { useState } from "react";
import { getDetailMovie } from "../Service/Api";
import { useParams } from "react-router-dom";
import MovieDetailsSkeleton from "../Components/Container/MovieDetailSkeleteon";
import { motion } from "framer-motion";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    // Async function to fetch movie details from the API
    const fetchMovieDetail = async () => {
      try {
        setIsLoading(true);
        const data = await getDetailMovie(params.id);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie detail:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Call the fetchMovieDetail function
    fetchMovieDetail();
  }, [params.id]);

  console.log(movie);
  return (
    <main className="min-h-screen max-w-5xl mx-auto my-8  ">
      {isLoading && <MovieDetailsSkeleton />}
      {movie && (
        <motion.article
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="min-h-screen mx-auto rounded-lg shadow-md shadow-gray-600 overflow-hidden"
        >
          <h1 className="text-3xl font-bold mb-4 text-center">{movie.title}</h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-7">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : "https://i.pinimg.com/564x/c6/3a/e4/c63ae4baec83b04b3f0d3e54b72b286c.jpg"
              }
              alt={movie.title}
              className="rounded-md shadow-2xl min-h-full "
            />
            <span>
              <p className="mb-2">
                <strong>Genres:</strong>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="mb-2">
                <strong>Popularity:</strong>{" "}
                {movie.popularity ? movie.popularity : "-"}
              </p>
              <p className="mb-2">
                <strong>Revenue:</strong> ${" "}
                {movie.revenue ? movie.revenue.toLocaleString("id-ID") : "-"}
              </p>
              <p className="mb-2">
                <strong>Runtime:</strong> {movie.runtime ? movie.runtime : "-"}{" "}
                minutes
              </p>

              <p className="mb-2">
                <strong>Vote Average:</strong>{" "}
                {movie.vote_average ? movie.vote_average : "-"}
              </p>
              <p className="mb-2">
                <strong>Vote Count:</strong>{" "}
                {movie.vote_count ? movie.vote_count : "-"}
              </p>
              <p className="mb-2">
                <strong>Release Date:</strong>{" "}
                {movie.release_date ? movie.release_date : "-"}
              </p>
              <p className="mb-2">
                <strong>Original Language:</strong>{" "}
                {movie.original_language ? movie.original_language : "-"}
              </p>
              <p className="mb-2">
                <strong>Original Title:</strong>{" "}
                {movie.original_title ? movie.original_title : "-"}
              </p>

              <p className="mb-2">
                <strong>Production Companies:</strong>{" "}
                {movie.production_companies
                  .map((company) => company.name)
                  .join(", ")}
              </p>
              <p className="mb-2">
                <strong>Production Countries:</strong>{" "}
                {movie.production_countries
                  .map((country) => country.name)
                  .join(", ")}
              </p>
              <p className="mb-2">
                <strong>Spoken Languages:</strong>{" "}
                {movie.spoken_languages
                  .map((language) => language.name)
                  .join(", ")}
              </p>
              <p className="mb-2">
                <strong>Tagline:</strong> {movie.tagline ? movie.tagline : "-"}
              </p>
            </span>
          </div>
          <p className="mt-4 mx-7">
            <strong>Synopsis</strong> : {movie.overview ? movie.overview : "-"}
          </p>
        </motion.article>
      )}
    </main>
  );
};

export default DetailPage;
