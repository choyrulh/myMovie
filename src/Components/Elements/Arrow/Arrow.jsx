import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
const Arrow = ({ previous, next }) => {
  const arrowIconVariants = {
    hover: {
      scale: 1.2,
      color: "#3498db", // Change to your desired hover color
    },
  };

  return (
    <>
      <div className="flex flex-row items-center text-3xl gap-2">
        <motion.div
          whileHover="hover"
          whileTap={{ scale: -2 }}
          variants={arrowIconVariants}
          className="rounded-full text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer"
          onClick={previous}
        >
          <HiChevronLeft />
        </motion.div>
        <motion.div
          whileHover="hover"
          whileTap={{ scale: -2 }}
          variants={arrowIconVariants}
          className="rounded-full text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer"
          onClick={next}
        >
          <HiChevronRight />
        </motion.div>
      </div>
    </>
  );
};

Arrow.propTypes = {
  previous: PropTypes.func,
  next: PropTypes.func,
};

export default Arrow;
