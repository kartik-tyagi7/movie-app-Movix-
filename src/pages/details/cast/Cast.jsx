import React from "react";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";
import { useSelector } from "react-redux";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton w-[125px] h-[125px] rounded-[50%] mb-4 md:w-[175px] md:h-[175px] md:mb-[25px]"></div>
        <div className="row skeleton w-full h-5 rounded-[10px] mb-[10px] "></div>
        <div className="row2 skeleton w-[75%] h-[20px] rounded-[10px] mx-auto"></div>
      </div>
    );
  };

  return (
    <div className="castSection relative my-[50px]">
      <div className="max-container">
        <div className="sectionHeading text-2xl text-white mb-[25px]">
          Top Cast
        </div>
        {!loading ? (
          <div className="listItems flex gap-5 overflow-y-hidden mr-[-20px] ml-[-20px] px-[20px] md:m-0 md:p-0">
            {data?.map((item) => {
              const imgUrl = item.profile_path ? url.profile + item.profile_path : avatar;
              return (
                <div className="listItem text-center text-white" key={item.id}>
                  <div className="profileImg w-[125px] h-[125px] rounded-[50%] overflow-hidden mb-4 md:w-[175px] md:h-[175px] md:mb-[25px]">
                    <Img src={imgUrl} />
                  </div>
                  <div className="name text-sm leading-5 font-semibold md:text-lg md:leading-6">{item.original_name}</div>
                  <div className="character text-sm leading-5 opacity-[0.5] md:text-base md:leading-6">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton flex  gap-5 overflow-y-hidden mr-[-20px] ml-[-20px] px-[20px] md:m-0 md:p-0">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cast;
