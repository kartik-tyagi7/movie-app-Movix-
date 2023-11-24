import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ ids }) => {
  const { genres } = useSelector((state) => state.home);
  // console.log(ids);
  return (
    <div className="genres hidden md:flex md:flex-wrap justify-end relative bottom-11 right-1 gap-1 text-white px-1">
      {ids?.map((item, index) => {
        if (!genres[item]?.name) return;
        return (
          <div
            key={item}
            className="genre bg-pink text-white text-xs px-1 rounded-[3px] flex justify-center items-center"
          >
            {genres[item]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
