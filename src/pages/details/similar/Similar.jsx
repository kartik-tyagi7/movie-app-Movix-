import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

//   console.log(data);

  return (
    <div className="carouselSection relative mb-14">
      <div className="max-container flex items-center justify-between mb-5">
        <span className="carouselTitle text-2xl text-white font-normal">
          {`Similar ${mediaType === "tv" ? "TV Shows" : "Movies"}`}
        </span>
      </div>

      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Similar;
