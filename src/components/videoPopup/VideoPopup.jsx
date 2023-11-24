import React from "react";
import ReactPlayer from "react-player/youtube";
import "./style.css";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div
      className={`videoPopup flex justify-center items-center w-full h-full fixed top-0 left-0 opacity-0 invisible z-10  ${
        show ? "visible" : ""
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full opacity-0 backdrop-blur-[3.5px] transition-[opacity] duration-[400] bg-black bg-opacity-25 ${
          show ? "opacityLayer" : ""
        }`}
        onClick={hidePopup}
      ></div>
      <div
        className={`relative w-[800px] aspect-[16/9] bg-white scale-[0.2] transition-[transform] duration-[250] ${
          show ? "videoPlayer" : ""
        }`}
      >
        <span
          className="closeBtn absolute top-[-23px] right-0 text-white hover:text-pink text-lg transition-all duration-200 cursor-pointer"
          onClick={hidePopup}
        >
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPopup;
