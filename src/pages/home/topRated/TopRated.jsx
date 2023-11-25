import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

const TopRated = () => {
  const [endPoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endPoint}/top_rated`);

  const onTabChange = (tab) => {
    if (tab === "Movies") {
      setEndpoint("movie");
    } else {
      setEndpoint("tv");
    }
  };

  return (
    <div className="carouselSection relative mb-20 max-sm:mb-0">
      <div className="max-container flex items-center justify-between mb-5">
        <span className="carouselTitle text-2xl text-white font-normal">
          Top Rated
        </span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </div>

      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
};

export default TopRated;
