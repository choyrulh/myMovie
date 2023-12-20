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
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="rounded-md shadow-md"
            />
            <div>
              <p className="mb-2">
                <strong>Adult:</strong> {movie.adult ? "Yes" : "No"}
              </p>
              <p className="mb-2">
                <strong>Genres:</strong>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="mb-2">
                <strong>Popularity:</strong> {movie.popularity}
              </p>
              <p className="mb-2">
                <strong>Revenue:</strong> Rp{" "}
                {movie.revenue.toLocaleString("id-ID")}
              </p>
              <p className="mb-2">
                <strong>Runtime:</strong> {movie.runtime} minutes
              </p>
              <p className="mb-2">
                <strong>Status:</strong> {movie.status}
              </p>
              <p className="mb-2">
                <strong>Vote Average:</strong> {movie.vote_average}
              </p>
              <p className="mb-2">
                <strong>Vote Count:</strong> {movie.vote_count}
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
