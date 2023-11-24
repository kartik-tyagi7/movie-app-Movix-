import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";

const HeroBanner = () => {
  const [imgSrc, setImgSrc] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading, error } = useFetch("/movie/popular");

  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const idx = Math.floor(Math.random() * 20);
    const bg = data?.results[idx].backdrop_path;

    setImgSrc(url.backdrop + bg);
    // console.log(imgSrc);
  }, [data]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // console.log(e.target.value);
    if (e.key == "Enter" && query.length > 0) {
      // console.log(query);
      navigate(`/search/${query}`);
    } else if (e.type == "click" && query.length > 0)
      navigate(`/search/${query}`);
  };

  return (
    <div className="heroBanner w-full h-[450px] flex items-center relative md:h-[700px]">
      {!loading && (
        <div className="backdrop-img w-full h-full absolute top-0 left-0 opacity-[0.5] overflow-hidden ">
          <Img src={imgSrc} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <div className="max-container">
        <div className="heroBannerContent flex flex-col items-center text-center max-w-[800px] m-auto relative">
          <span className="title text-white text-8xl max-md:text-5xl font-bold">Welcome.</span>
          <span className="subTitle text-white text-2xl max-md:text-lg">
            Discover, Explore, and Enjoy Your Favorite Movies
          </span>

          <div className="searchInput mx-5 mt-10 rounded-full overflow-hidden h-14 max-md:h-12 w-full flex flex-nowrap">
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              className="h-full w-full max-w-full px-7 text-lg max-md:text-sm outline-none m-auto"
              onKeyUp={(e) => handleSearch(e)}
            ></input>
            <button
              type="button"
              className="h-full w-[7rem] text-white font-[500] text-lg px-4 color-gradient"
              onClick={(e) => handleSearch(e)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
