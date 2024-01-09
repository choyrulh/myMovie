import { useState, useEffect } from "react";
import Api from "../../../Service/Api";
import "../../../index.css";
import Arrow from "../Arrow/Arrow";
import Card from "../../Container/Card";
function Trending() {
  const [trending, setTrending] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const localStorageTrending = localStorage.getItem("trending");
    if (localStorageTrending) {
      const trendingData = JSON.parse(localStorageTrending);
      setTrending(trendingData);
    } else {
      getTrending();
    }
  }, []);
  const getTrending = async () => {
    await Api.getTrending.then((resp) => {
      setTrending(resp.data.results);
      // Simpan data ke dalam local storage
      localStorage.setItem("trending", JSON.stringify(resp.data.results));
      console.log(resp.data.results);
    });
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < trending.length - 8) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getVisibleCards = () => {
    return trending.slice(currentIndex, currentIndex + 8);
  };

  return (
    <>
      <div className="max-h-[300px] mt-3 mx-7 flex flex-col gap-2 ">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold ">Trending</h1>
          <Arrow previous={handlePreviousClick} next={handleNextClick} />
        </div>

        <Card
          label={getVisibleCards()}
          className="transition all ease-in-out duration-500"
          id="trending"
        ></Card>
      </div>
    </>
  );
}

export default Trending;
