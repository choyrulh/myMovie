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
            className="bg-gradient-to-r from-black from-[30%] to-transparent max-h-[80vh] group flex flex-row-reverse justify-start items-start rounded-3xl border"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              className="h-[80vh] w-[80%] rounded-3xl object-center mix-blend-overlay"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="h-[80vh] w-[40%] relative left-0"
            >
              <div className="h-fit w-fit mt-[35%] ml-11">
                <h2 className="text-5xl">
                  {item.title ? item.title : item.name}
                </h2>
                <h3 className="text-base mt-2">
                  {`Release Date : ${
                    item.release_date ? item.release_date : item.first_air_date
                  }`}
                </h3>
                <h4 className="mt-1">
                  {item.popularity.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </h4>
                <h5 className="text-sm mt-1">
                  Synopsis:<p>{item.overview.slice(0, 200) + " " + "..."}</p>
                </h5>
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
