import { Link } from "react-router-dom";
import CardSkeleton from "./CardSkeleteon";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

const AllCard = ({ label, Loading, count }) => {
  const handleClickWindow = () => {
    window.scrollTo(0, 0);
  };
  return (
    // Use a conditional expression to render either the skeleton or the actual cards
    Loading ? (
      // Render the skeleton when data is loading
      <CardSkeleton length={count} />
    ) : (
      // Render the actual cards when data is loaded
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen w-[100%} flex flex-wrap gap-3 items-start mt-5 mx-7"
      >
        {label.map((item, index) => (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 * index }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              zIndex: 10,
            }}
            key={index}
            className="h-[250px] w-40 relative cursor-pointer"
          >
            <Link to={`/detail/${item.id}`} onClick={handleClickWindow}>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://i.pinimg.com/564x/c6/3a/e4/c63ae4baec83b04b3f0d3e54b72b286c.jpg"
                }
                className="object-fill w-[100%] h-[100%] rounded-lg"
              />
              <motion.span
                whileHover={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[50%] absolute bottom-0 rounded-b-lg bg-gradient-to-t from-black to-transparent flex justify-center items-end"
              >
                <h2 className="text-center mb-2">
                  {item.title ? item.title : item.name}
                </h2>
              </motion.span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    )
  );
};

AllCard.propTypes = {
  label: PropTypes.array.isRequired,
  Loading: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
};

export default AllCard;
