import { useState, useEffect } from "react";
import Api from "../../../Service/Api";
import Arrow from "../Arrow/Arrow";
import Card from "../../Container/Card";

function TopRatedTV() {
  const [topRatedTV, setTopRatedTV] = useState([]);
  useEffect(() => {
    const localStorageTopRatedTV = localStorage.getItem("topRatedTV");
    if (localStorageTopRatedTV) {
      const topRatedTVData = JSON.parse(localStorageTopRatedTV);
      setTopRatedTV(topRatedTVData);
    } else {
      getTopRatedTV();
    }
  }, []);
  const getTopRatedTV = async () => {
    await Api.getTopRatedTV.then((resp) => {
      setTopRatedTV(resp.data.results);
      // Simpan data ke dalam local storage
      localStorage.setItem("topRatedTV", JSON.stringify(resp.data.results));
      console.log(resp.data.results);
    });
  };
  return (
    <>
      <div className=" max-h-[300px]  mt-3 mx-7 flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold">Top Rated</h1>
          <Arrow></Arrow>
        </div>

        <Card label={topRatedTV}></Card>
      </div>
    </>
  );
}

export default TopRatedTV;
