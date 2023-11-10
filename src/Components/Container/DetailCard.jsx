import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Api from "../../Service/Api";

function DetailCard() {
  const [detailMovie, setDetailMovie] = useState();
  useEffect(() => {
    getDetailMovie();
  }, []);
  const getDetailMovie = () => {
    Api.getDetailMovie.then((resp) => {
      setDetailMovie(resp.data.results);
      window.dispatchEvent(
        new CustomEvent("detailMovie", { detail: detailMovie })
      );
      console.log(resp.data.results);
      console.log(resp.data.results);
    });
  };

  return <div>DetailCard</div>;
}

export default DetailCard;
