import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import PosterFallback from "../../../assets/no-poster.png";
import { PlayIcon } from "./PlayButton";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import "./style.css";
import CircleRating from "./CircleRating";
import Genres from "./Genres";

const DetailsBanner = ({ video, crew }) => {
  const [imgSrc, setImgSrc] = useState("");
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  // console.log(data?.backdrop_path);

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg = data?.backdrop_path;
    setImgSrc(url.backdrop + bg);
  }, [data, url.backdrop]);

  const toHoursAndMin = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const min = runtime % 60;
    return `${hours}h${min > 0 ? ` ${min}m` : ""}`;
  };

  const genresId = data?.genres?.map((item) => {
    return item.id;
  });

  const director = crew?.filter((element) => element.job === "Director");
  const writers = crew?.filter(
    (element) =>
      element.job === "Screenplay" ||
      element.job === "Story" ||
      element.job === "Writer"
  );

  // console.log(director, writers);

  return (
    <div className="detailsBanner w-full bg-bg pt-[100px] mb-[50px] md:mb-0 md:pt-[120px] md:min-h-[700px]">
      {!loading ? (
        <div className="">
          <div className="backdrop-img h-full w-full absolute top-0 left-0 opacity-[0.3] overflow-hidden">
            <Img src={imgSrc} className="w-full h-full " />
          </div>
          <div className="opacity-layer w-full h-[250px] absolute bottom-0 left-0"></div>
          <div className="max-container">
            <div className="content flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
              <div className="left flex-shrink-0">
                {data?.poster_path ? (
                  <Img
                    className="posterImg w-full block rounded-[12px] md:max-w-[350px]"
                    src={url.poster + data?.poster_path}
                  />
                ) : (
                  <Img src={PosterFallback} />
                )}
              </div>
              <div className="right text-white">
                <div className="title text-[28px] leading-[40px] md:text-[34px] md:leading-[44px]">
                  {`${data?.original_title || data?.original_name} (${
                    data?.release_date?.slice(0, 4) ||
                    data?.last_air_date?.slice(0, 4)
                  })`}
                </div>
                <div className="subtitle text-[16px] leading-6 mb-4 italic opacity-[0.5] md:text-[20px] md:leading-7">{`${data?.tagline}`}</div>

                <Genres className="mb-[25px] flex" ids={genresId} />

                <div className="row flex items-center gap-[25px] mb-[25px]">
                  <CircleRating rating={data?.vote_average.toFixed(1)} />
                  <div
                    className="playbtn flex items-center gap-5 cursor-pointer hover:text-pink"
                    onClick={() => {
                      setShow(true);
                      setVideoId(video.key);
                    }}
                  >
                    <PlayIcon className="w-[60px] md:w-[80px]" />
                    <span className="text-xl transition-all ease-in-out duration-500">
                      Watch Trailer
                    </span>
                  </div>
                </div>
                <div className="overview mb-6">
                  <div className="heading text-[24px] mb-[10px]">Overview</div>
                  <div className="description leading-6 md:pr-[100px]">
                    {data?.overview}
                  </div>
                </div>
                <div className="info">
                  {data?.status && (
                    <div className="infoItem">
                      <span className="text bold">Status: </span>
                      <span className="text">{data?.status}</span>
                    </div>
                  )}
                  {data?.release_date && (
                    <div className="infoItem">
                      <span className="text bold">Release Date: </span>
                      <span className="text">
                        {dayjs(data?.release_date).format("MMM D, YYYY")}
                      </span>
                    </div>
                  )}
                  {data?.runtime && (
                    <div className="infoItem">
                      <span className="text bold">Runtime: </span>
                      <span className="text">
                        {toHoursAndMin(data?.runtime)}
                      </span>
                    </div>
                  )}
                </div>

                {director?.length > 0 && (
                  <div className="info">
                    <span className="text bold">Director: </span>
                    <span className="text">
                      {director?.map((ele, idx) => (
                        <span key={idx}>
                          {ele.name}
                          {director.length - 1 !== idx && ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                )}

                {writers?.length > 0 && (
                  <div className="info">
                    <span className="text bold">Writer: </span>
                    <span className="text">
                      {writers?.map((ele, idx) => (
                        <span key={idx}>
                          {ele.name}
                          {writers.length - 1 !== idx && ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                )}

                {data?.created_by?.length > 0 && (
                  <div className="info">
                    <span className="text bold">Creator: </span>
                    <span className="text">
                      {data?.created_by?.map((ele, idx) => (
                        <span key={idx}>
                          {ele.name}
                          {data?.created_by?.length - 1 !== idx && ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <VideoPopup
              show={show}
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoId}
            />
          </div>
        </div>
      ) : (
        <div className="detailsBannerSkeleton">
          <div className="max-container">
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
