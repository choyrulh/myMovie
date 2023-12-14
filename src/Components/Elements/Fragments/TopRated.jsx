import { useState, useEffect } from "react";
import Api from "../../../Service/Api";
import Arrow from "../Arrow/Arrow";
import Card from "../../Container/Card";

function TopRated() {
  const [topRated, setTopRated] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const localStorageTopRated = localStorage.getItem("topRated");
    if (localStorageTopRated) {
      const topRatedData = JSON.parse(localStorageTopRated);
      setTopRated(topRatedData);
    } else {
      getTopRated();
    }
  }, []);
  const getTopRated = async () => {
    await Api.getTopRated.then((resp) => {
      setTopRated(resp.data.results);
      localStorage.setItem("topRated", JSON.stringify(resp.data.results));
      console.log(resp.data.results);
    });
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < topRated.length - 8) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getVisibleCards = () => {
    return topRated.slice(currentIndex, currentIndex + 8);
  };
  return (
    <>
      <div className=" max-h-[300px]  mt-3 mx-7 flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold">Top Rated</h1>
          <Arrow previous={handlePreviousClick} next={handleNextClick} />
        </div>

        <Card label={getVisibleCards()}></Card>
      </div>
    </>
  );
}

export default TopRated;
