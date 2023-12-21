import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ label }) => {
  return (
    <div className="h-[250px] w-[100%} flex flex-row gap-2 justify-evenly">
      {label.map(
        (item, index) =>
          index < 8 && (
            <div
              key={index}
              className="h-[250px] w-40 relative hover:scale-105 hover:z-10 hover:delay-150 transition all ease-in-out duration-200 cursor-pointer"
            >
              <Link to={`/detail/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  className="object-fill w-[100%] h-[100%] rounded-lg"
                />
                <div className="w-full h-[50%] absolute bottom-0 rounded-b-lg bg-gradient-to-t from-black to-transparent flex justify-center items-end">
                  <h2 className="text-center mb-2">
                    {item.title ? item.title : item.name}
                  </h2>
                </div>
              </Link>
            </div>
          )
      )}
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.array,
};

export default Card;
