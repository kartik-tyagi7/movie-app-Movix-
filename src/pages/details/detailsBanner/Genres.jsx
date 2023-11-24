import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ ids }) => {
  const { genres } = useSelector((state) => state.home);
  // console.log(ids);
  return (
    <div className="genres flex flex-row flex-wrap gap-2 text-white w-full mb-[25px]">
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
