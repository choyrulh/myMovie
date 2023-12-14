import { useState, useEffect } from "react";
import Api from "../../../Service/Api";
import Arrow from "../Arrow/Arrow";
import Card from "../../Container/Card";

function Popular() {
  const [popular, setPopular] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastFetched, setLastFetched] = useState(null);

  // Cek apakah data popular sudah disimpan di local storage
  useEffect(() => {
    const localStoragePopular = JSON.parse(localStorage.getItem("popular"));
    const localStorageTimestamp = parseInt(
      localStorage.getItem("popular_timestamp")
    );

    if (
      localStoragePopular &&
      localStorageTimestamp &&
      Date.now() - localStorageTimestamp < 3600000
    ) {
      setPopular(localStoragePopular);
      setCurrentIndex(parseInt(localStorage.getItem("popular_currentIndex")));
    } else {
      getPopular();
    }
  }, []);

  //
  const getPopular = async () => {
    await Api.getPopular.then((resp) => {
      setPopular(resp.data.results);
      setCurrentIndex(0);
      setLastFetched(Date.now());

      // Store data in local storage
      localStorage.setItem("popular", JSON.stringify(resp.data.results));
      localStorage.setItem("popular_currentIndex", 0);
      localStorage.setItem("popular_timestamp", Date.now());
      console.log(resp.data.results);
    });
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      localStorage.setItem("popular_currentIndex", currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < popular.length - 8) {
      setCurrentIndex(currentIndex + 1);
      localStorage.setItem("popular_currentIndex", currentIndex + 1);
    }
  };

  const getVisibleCards = () => {
    return popular.slice(currentIndex, currentIndex + 8);
  };

  return (
    <>
      <div className="max-h-[300px]  mt-3 mx-7 flex flex-col gap-2 ">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold">Popular</h1>
          <Arrow previous={handlePreviousClick} next={handleNextClick} />
        </div>

        <Card label={getVisibleCards()} />
      </div>
    </>
  );
}

export default Popular;
