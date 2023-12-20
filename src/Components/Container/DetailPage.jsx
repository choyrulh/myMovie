import { useEffect } from "react";
import { useState } from "react";
import { getDetailMovie } from "../../Service/Api";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    // Async function to fetch movie details from the API
    const fetchMovieDetail = async () => {
      try {
        const data = await getDetailMovie(params.id);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie detail:", error);
      }
    };

    // Call the fetchMovieDetail function
    fetchMovieDetail();
  }, [params.id]);

  console.log(movie);
  return (
    <div className="container mx-auto my-8">
      {movie && (
        <>
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : "https://i.pinimg.com/564x/c6/3a/e4/c63ae4baec83b04b3f0d3e54b72b286c.jpg"
              }
              alt={movie.title}
              className="rounded-md shadow-md"
            />
            <div>
              <p className="mb-2">
                <strong>Genres:</strong>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="mb-2">
                <strong>Popularity:</strong> {movie.popularity}
              </p>
              <p className="mb-2">
                <strong>Revenue:</strong> ${" "}
                {movie.revenue.toLocaleString("id-ID")}
              </p>
              <p className="mb-2">
                <strong>Runtime:</strong> {movie.runtime} minutes
              </p>

              <p className="mb-2">
                <strong>Vote Average:</strong> {movie.vote_average}
              </p>
              <p className="mb-2">
                <strong>Vote Count:</strong> {movie.vote_count}
              </p>
              <p className="mb-2">
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p className="mb-2">
                <strong>Original Language:</strong> {movie.original_language}
              </p>
              <p className="mb-2">
                <strong>Original Title:</strong> {movie.original_title}
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
                <strong>Tagline:</strong> {movie.tagline}
              </p>
            </div>
          </div>
          <p className="mt-4">{movie.overview}</p>
        </>
      )}
    </div>
  );
};

export default DetailPage;
