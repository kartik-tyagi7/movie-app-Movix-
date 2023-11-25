import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./style.css";
import dayjs from "dayjs";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

const Carousel = ({ data, loading, endPoint }) => {
  const carouselContainer = useRef();
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  // console.log(data);

  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "right"
        ? container.scrollLeft + (container.offsetWidth + 20)
        : container.scrollLeft - (container.offsetWidth + 20);

    // console.log(scrollAmount);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton rounded-[12px] w-full aspect-[1/1.5] mb-[30px]"></div>
        <div className="textBlock flex flex-col">
          <div className="title skeleton w-full h-[20px] mb-[10px]"></div>
          <div className="date skeleton w-[75%] h-[20px]"></div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="carousel mb-12 mt-5">
      <div className="max-container relative">
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav left-8 arrow hidden md:block"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRightNav right-8 arrow hidden md:block"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div
            className="carouselItems flex gap-[10px] overflow-y-hidden mr-[-20px] ml-[-20px] px-[20px] md:gap-5 md:overflow-hidden md:m-0 md:p-0"
            ref={carouselContainer}
          >
            {data?.map((item) => {
              // console.log(item.genre_ids);
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="carouselItem w-[125px] cursor-pointer md:w-custom_carousel_md lg:w-custom_carousel_lg flex-shrink-0"
                  onClick={() =>
                    navigate(`/${item.media_type || endPoint}/${item.id}`)
                  }
                >
                  <div className="posterBlock relative w-full aspect-[1/1.5] bg-cover bg-center ">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres ids={item.genre_ids.slice(0, 2)} />
                  </div>

                  <div className="textBlock text-white flex flex-col pl-1 relative bottom-7">
                    <span className="title text-[16px] max-sm:text-[13px] mb-[3px] leading-6 md:text-xl truncate">
                      {item.title || item.name}
                    </span>
                    <span className="date text-sm max-sm:text-[13px] opacity-[0.5]">
                      {dayjs(item.release_date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton flex gap-[10px] overflow-y-hidden mr-[-20px] ml-[-20px] px-[20px] md:gap-5 md:overflow-hidden md:m-0 md:p-0">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
