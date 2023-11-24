import React from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Recommendations = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    data?.results.length && (
      <div className="carouselSection relative mb-14">
        <div className="max-container flex items-center justify-between mb-5">
          <span className="carouselTitle text-2xl text-white font-normal">
            Recommendations
          </span>
        </div>

        <Carousel data={data?.results} loading={loading} />
      </div>
    )
  );
};

export default Recommendations;
