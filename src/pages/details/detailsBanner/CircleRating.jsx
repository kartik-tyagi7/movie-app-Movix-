import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating rounded-full p-[3px] max-w-[90px] max-h-[90px] flex-shrink-0">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textSize: "34px",
          textColor: "white",
          trailColor: "transparent",
          backgroundColor: "black" ,
        })}
      />
    </div>
  );
};

export default CircleRating;
