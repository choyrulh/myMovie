import { PropTypes } from "prop-types";
const CardSkeleton = ({ length = 0 }) => {
  return (
    <div className="h-[250px] w-[100%} flex flex-wrap gap-3 items-start mt-5 mx-7">
      {length > 0 &&
        [...Array(length)].map((_, index) => (
          <div
            key={index}
            className="h-[250px] w-40 relative overflow-hidden rounded-lg animate-pulse"
          >
            <div className="relative w-full h-[200px] bg-slate-200 rounded-lg">
              {/* Wrap content within this inner div */}
              <div className="absolute inset-0 px-4 py-2 text-center">
                {/* Placeholder content for demonstration */}
                <span className="animate-pulse text-gray-400">Loading...</span>
              </div>
            </div>
            <div className="w-full h-[50%] bg-gradient-to-t from-slate-400 to-transparent flex flex-row justify-center items-center">
              <div className="h-4 w-full bg-slate-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        ))}
      {length === 0 && <div className="text-center">No data available</div>}
    </div>
  );
};

CardSkeleton.propTypes = {
  length: PropTypes.number,
};

export default CardSkeleton;
