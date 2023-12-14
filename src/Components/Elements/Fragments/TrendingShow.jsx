import { useEffect, useState } from "react";
import Api from "../../../Service/Api";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Banner from "../Banner/Banner";

function TrendingShow() {
  const [trendingShow, setTrendingShow] = useState([]);
  useEffect(() => {
    const localStorageTrendingShow = localStorage.getItem("trendingShow");
    if (localStorageTrendingShow) {
      const trendingShowData = JSON.parse(localStorageTrendingShow);
      setTrendingShow(trendingShowData);
    } else {
      getTrendingShow();
    }
  }, []);

  const getTrendingShow = async () => {
    await Api.getTrendingShow.then((resp) => {
      setTrendingShow(resp.data.results);
      // Simpan data ke dalam local storage
      localStorage.setItem("trendingShow", JSON.stringify(resp.data.results));
      console.log(resp.data.results);
    });
  };

  return (
    <>
      <div className=" max-w-full max-h-[80vh] relative mt-1 mx-3 px-4 group">
        <Banner label={trendingShow}></Banner>
      </div>
    </>
  );
}

export default TrendingShow;
