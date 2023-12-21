import { Link } from "react-router-dom";
import CardSkeleton from "./CardSkeleteon";
import { PropTypes } from "prop-types";

const AllCard = ({ label, Loading, count }) => {
  return (
    // Use a conditional expression to render either the skeleton or the actual cards
    Loading ? (
      // Render the skeleton when data is loading
      <CardSkeleton length={count} />
    ) : (
      // Render the actual cards when data is loaded
      <div className="h-[250px] w-[100%} flex flex-wrap gap-3 items-start mt-5 mx-7">
        {label.map((item, index) => (
          <div
            key={index}
            className="h-[250px] w-40 relative hover:scale-105 hover:z-10 hover:delay-150 transition all ease-in-out duration-200 cursor-pointer"
          >
            <Link to={`/detail/${item.id}`}>
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://i.pinimg.com/564x/c6/3a/e4/c63ae4baec83b04b3f0d3e54b72b286c.jpg"
                }
                className="object-fill w-[100%] h-[100%] rounded-lg"
              />
              <div className="w-full h-[50%] absolute bottom-0 rounded-b-lg bg-gradient-to-t from-black to-transparent flex justify-center items-end">
                <h2 className="text-center mb-2">
                  {item.title ? item.title : item.name}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    )
  );
};

AllCard.propTypes = {
  label: PropTypes.array.isRequired,
  Loading: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
};

export default AllCard;
