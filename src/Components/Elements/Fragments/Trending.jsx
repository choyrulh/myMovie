import { useState, useEffect } from "react";
import Api from "../../../Service/Api";
import "../../../index.css";
import Arrow from "../Arrow/Arrow";
import Card from "../../Container/Card";
function Trending() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const localStorageTrending = localStorage.getItem("trending");
    if (localStorageTrending) {
      const trendingData = JSON.parse(localStorageTrending);
      setTrending(trendingData);
    } else {
      getTrending();
    }
  }, []);
  const getTrending = () => {
    Api.getTrending.then((resp) => {
      setTrending(resp.data.results);
      // Simpan data ke dalam local storage
      localStorage.setItem("trending", JSON.stringify(resp.data.results));
      console.log(resp.data.results);
    });
  };
  return (
    <>
      <div className="max-h-[300px]  mt-3 mx-7 flex flex-col gap-2 ">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold ">Trending</h1>
          <Arrow></Arrow>
        </div>

        <Card label={trending}></Card>
      </div>
    </>
  );
}

export default Trending;
