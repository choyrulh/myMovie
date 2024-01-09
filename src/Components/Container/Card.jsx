import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Card = ({ label }) => {
  const handleClickWindow = () => {
    window.scrollTo(0, 0);
  };
  return (
    <motion.ul
      className="grid grid-cols-8 gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {label.map((item, index) => (
        <motion.li
          key={item.id}
          className="h-[250px] w-40 relative cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 * index }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
            zIndex: 10,
          }}
        >
          <Link to={`/detail/${item.id}`} onClick={handleClickWindow}>
            <motion.img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              className="object-fill w-[100%] h-[100%] rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className="w-full h-[50%] absolute bottom-0 rounded-b-lg bg-gradient-to-t from-black to-transparent flex justify-center items-end"
              whileHover={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-center mb-2">
                {item.title ? item.title : item.name}
              </h2>
            </motion.span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

Card.propTypes = {
  label: PropTypes.array,
};

export default Card;
