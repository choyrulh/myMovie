import { useState, useEffect } from "react";
import Api from "../../../Service/Api";
import Arrow from "../Arrow/Arrow";
import Card from "../../Container/Card";

function TopRated() {
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    const localStorageTopRated = localStorage.getItem("topRated");
    if (localStorageTopRated) {
      const topRatedData = JSON.parse(localStorageTopRated);
      setTopRated(topRatedData);
    } else {
      getTopRated();
    }
  }, []);
  const getTopRated = () => {
    Api.getTopRated.then((resp) => {
      setTopRated(resp.data.results);
      localStorage.setItem("topRated", JSON.stringify(resp.data.results));
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

        <Card label={topRated}></Card>
      </div>
    </>
  );
}

export default TopRated;
