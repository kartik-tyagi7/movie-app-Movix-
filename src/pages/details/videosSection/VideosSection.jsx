import React, { useState } from "react";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import { PlayIcon } from "./PlayIcon";
import Img from "../../../components/lazyLoadImage/Img";

const VideosSection = ({ data, loading }) => {
  // console.log(data);
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videoSection  mb-[50px]">
      <div className="max-container">
        <div className="sectionHeading text-2xl text-white mb-6">
          Official videos
        </div>
        {!loading ? (
          <div className="videos flex gap-[10px] overflow-x-auto mr-[-20px] ml-[-20px] px-[20px] md:gap-[20px] md:m-0 md:p-0">
            {data?.map((video) => {
              return (
                <div
                  key={video.id}
                  className="videoItem  w-[150px] flex-shrink-0 md:w-[25%] cursor-pointer"
                  onClick={() => {
                    setVideoId(video.key);
                    setShow(true);
                  }}
                >
                  <div className="videoThumbnail mb-[15px] relative  transition-all duration-500">
                    <Img
                      className={
                        "w-full block rounded-xl  transition-all duration-700 ease-in-out hover:opacity-[0.5]"
                      }
                      src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    />
                    <PlayIcon />
                  </div>
                  <div className="videoTitle text-white text-sm md:text-base md:leading-6">
                    {video.name}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </div>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
