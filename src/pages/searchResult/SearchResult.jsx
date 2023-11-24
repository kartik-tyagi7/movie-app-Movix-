import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import noResult from "../../assets/no-results.png";
// import "./style.css";
import { fetchDataFromApi } from "../../utils/api";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movieCard/MovieCard";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setPageNum(1)
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage min-h-[700px] pt-[100px]">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <div className="max-container">
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle text-2xl leading-8 text-white mb-[25px]">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } for '${query}'`}
              </div>
              <InfiniteScroll
                className="content flex flex-row flex-wrap gap-[10px] mb-[50px] md:gap-[20px]"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
                endMessage={
                  <div className="w-full flex justify-center items-center my-10">
                    <p className="text-white text-xl opacity-[0.5]">Yay! You have seen it all...</p>
                  </div>
                }
              >
                {data?.results?.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound text-white">
              Sorry, No Results...
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
