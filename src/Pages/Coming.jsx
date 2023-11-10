import { useEffect, useState } from "react";
import Api from "../Service/Api";
import Banner from "../Components/Elements/Banner/Banner";

function Coming() {
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    const localStorageUpcoming = localStorage.getItem("upcoming");
    if (localStorageUpcoming) {
      const upcomingData = JSON.parse(localStorageUpcoming);
      setUpcoming(upcomingData);
    } else {
      getUpcoming();
    }
  }, []);
  const getUpcoming = () => {
    Api.getUpcoming.then((resp) => {
      setUpcoming(resp.data.results);
      // Simpan data ke dalam local storage
      localStorage.setItem("upcoming", JSON.stringify(resp.data.results));

      console.log(resp.data.results);
    });
  };
  return (
    <>
      <div className=" max-w-full max-h-[80vh] relative mt-1 mx-3 px-4 group">
        <Banner label={upcoming}></Banner>
      </div>
    </>
  );
}

export default Coming;
