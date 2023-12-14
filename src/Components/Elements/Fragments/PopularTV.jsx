import { useState, useEffect } from "react";
import Api from "../../../Service/Api";
import Arrow from "../Arrow/Arrow";
import Card from "../../Container/Card";

function PopularTV() {
  const [popularTV, setPopularTV] = useState([]);
  useEffect(() => {
    const localStoragePopularTV = localStorage.getItem("popularTV");
    if (localStoragePopularTV) {
      const popularTVData = JSON.parse(localStoragePopularTV);
      setPopularTV(popularTVData);
    } else {
      getPopularTV();
    }
  }, []);
  const getPopularTV = async () => {
    await Api.getPopularTV.then((resp) => {
      setPopularTV(resp.data.results);
      // Simpan data ke dalam local storage
      localStorage.setItem("popularTV", JSON.stringify(resp.data.results));
      console.log(resp.data.results);
    });
  };
  return (
    <>
      <div className="max-h-[300px]  mt-3 mx-7 flex flex-col gap-2 ">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold">Popular</h1>
          <Arrow></Arrow>
        </div>

        <Card label={popularTV}></Card>
      </div>
    </>
  );
}

export default PopularTV;
