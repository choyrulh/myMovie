import { useState, useEffect } from "react";
import Api from "../../../Service/Api";
import Banner from "../Banner/Banner";

function Now() {
  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    const localStorageNowPlaying = localStorage.getItem("nowPlaying");
    if (localStorageNowPlaying) {
      const nowPlayingData = JSON.parse(localStorageNowPlaying);
      setNowPlaying(nowPlayingData);
    } else {
      getNowPlaying();
    }
  }, []);
  const getNowPlaying = async () => {
    await Api.getNowPlaying.then((resp) => {
      setNowPlaying(resp.data.results);
      // Simpan data ke dalam local storage
      localStorage.setItem("nowPlaying", JSON.stringify(resp.data.results));
      console.log(resp.data.results);
    });
  };
  return (
    <>
      <div className=" max-w-full max-h-[80vh] relative mt-1 mx-3 px-4 group">
        <Banner label={nowPlaying}></Banner>
      </div>
    </>
  );
}

export default Now;
