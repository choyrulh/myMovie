import { useState, useEffect } from "react";
import Api from "../../../Service/Api";
import Arrow from "../Arrow/Arrow";
import Card from "../../Container/Card";

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const localStoragePopular = localStorage.getItem("popular");
    if (localStoragePopular) {
      const popularData = JSON.parse(localStoragePopular);
      setPopular(popularData);
    } else {
      getPopular();
    }
  }, []);
  const getPopular = () => {
    Api.getPopular.then((resp) => {
      setPopular(resp.data.results);
      // Simpan data ke dalam local storage
      localStorage.setItem("popular", JSON.stringify(resp.data.results));
      console.log(resp.data.results);
    });
  };

  return (
    <>
      <div className="max-h-[300px]  mt-3 mx-7 flex flex-col gap-2 ">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold">Popular</h1>
          <Arrow />
        </div>

        <Card label={popular} />
      </div>
    </>
  );
}

export default Popular;
