import React from "react";
import Arrow from "../Elements/Arrow/Arrow";
import Card from "./Card";

export const SlideShow = ({ label }) => {
  const [slideIndex, setSlideIndex] = React.useState(0);

  const handleSlideChange = (direction) => {
    const newSlideIndex = slideIndex + direction;
    if (newSlideIndex < 0 || newSlideIndex >= label.length) {
      return;
    }

    setSlideIndex(newSlideIndex);
  };

  return (
    <div>
      <Arrow
        onClickLeft={() => handleSlideChange(-1)}
        onClickRight={() => handleSlideChange(1)}
      />
      <Card label={label.slice(slideIndex, slideIndex + 8)} />
    </div>
  );
};
