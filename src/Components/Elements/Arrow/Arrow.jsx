import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { PropTypes } from "prop-types";

const Arrow = ({ previous, next }) => {
  return (
    <>
      <div className="flex flex-row items-center text-3xl gap-2">
        <HiChevronLeft
          className="rounded-full text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer"
          onClick={previous}
        />
        <HiChevronRight
          className="rounded-full text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer"
          onClick={next}
        />
      </div>
    </>
  );
};

Arrow.propTypes = {
  previous: PropTypes.func,
  next: PropTypes.func,
};

export default Arrow;
