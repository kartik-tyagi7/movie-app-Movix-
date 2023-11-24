import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

const CircleRating = ({rating}) => {
  return (
    <div className="circleRating rounded-full p-[3px] w-[40px] h-[40px] relative top-[-30px] left-3 bg-white md:w-[50px] md:h-[50px] flex-shrink-0">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textSize: "34px",
          textColor: "black",
          trailColor: "transparent",
        })}
      />
    </div>
  );
};

export default CircleRating;
