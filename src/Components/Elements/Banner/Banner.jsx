import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
export function Banner({ label }) {
  const handleWindow = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={1000}
      infiniteLoop={true}
      showStatus={false}
      interval={3000}
      className="cursor-pointer"
    >
      {label.map((item) => (
        <Link key={item.id} to={`/detail/${item.id}`} onClick={handleWindow}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-black from-[30%] to-transparent max-h-[80vh] group flex flex-row-reverse justify-start items-start rounded-3xl border overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.title || item.name}
              className="h-[80vh] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] rounded-3xl object-cover md:object-cover"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 h-full w-full sm:w-[30%] md:w-[40%] lg:w-[50%] bg-gradient-to-l from-transparent to-black p-8 text-white"
            >
              <div className="h-full flex flex-col justify-center ">
                <h2 className="text-4xl mb-2">{item.title || item.name}</h2>
                <p className="text-sm mb-4">
                  Release Date: {item.release_date || item.first_air_date}
                </p>
                <p className="mb-4">Popularity: {item.popularity}</p>
                <p className="text-sm">
                  Synopsis: {item.overview.slice(0, 200) + "..."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Link>
      ))}
    </Carousel>
  );
}

Banner.propTypes = {
  label: PropTypes.array.isRequired,
};

export default Banner;
