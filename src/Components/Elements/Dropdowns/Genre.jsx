import { useContext } from "react";
import { GenreFilter } from "../../../Context/GenreFilterContext";
import { motion } from "framer-motion";

function Genre() {
  const { genres, searchTerm, handleGenreChange, cancel } =
    useContext(GenreFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.select
        onChange={handleGenreChange}
        value={searchTerm}
        className="rounded-md shadow-md px-4 py-2 text-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <option value="">{cancel ? "All Genres" : "Select Genre"}</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </motion.select>
      {cancel && (
        <motion.button
          onClick={handleGenreChange}
          className="ml-4 uppercase text-red-500 hover:text-red-900"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Cancel
        </motion.button>
      )}
    </motion.div>
  );
}

export default Genre;
