import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import Img from "../lazyLoadImage/Img";
import dayjs from "dayjs";
import "./style.css";
import React from "react";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
    // console.log(posterUrl);

  return (
    <div
      className="movieCard mb-[25px] cursor-pointer flex-shrink-0"
      onClick={()=>navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock relative w-full aspect-[1/1.5] bg-cover bg-center mb-[5px] transition-all ease duration-500 hover:opacity-[0.5]">
        <Img src={posterUrl} />
        {!fromSearch && (
          <React.Fragment>
            <Genres ids={data.genre_ids.slice(0, 2)}/>
            <CircleRating rating={data.vote_average.toFixed(1)} />
          </React.Fragment>
        )}
      </div>
      <div className="textBlock text-white flex flex-col">
        <span className="title text-[16px] md:text-[20px] mb-[10px] leading-5 truncate">
          {data.title || data.name}
        </span>
        <span className="date text-sm opacity-[0.5]">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
