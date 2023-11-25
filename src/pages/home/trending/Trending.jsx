import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

const Trending = () => {
  const [endPoint, setEndpoint] = useState("day");
  
  const { data, loading, error } = useFetch(`/trending/all/${endPoint}`);
  // console.log(data);

  const onTabChange = (tab, index) => {
    setEndpoint(tab.toLowerCase());
  };

  return (
    <div className="carouselSection relative mb-20 max-sm:mb-0">
      <div className="max-container flex items-center justify-between mb-5">
        <span className="carouselTitle text-2xl text-white font-normal">
          Trending
        </span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>

      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
