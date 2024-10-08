import React, { useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState } from "react";

import ShimmerUi from "./shimmerUi";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
export function Body() {
  const [resObj, setResObj] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [search, setSearch] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json)
    setResObj(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchedData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(resObj)
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1 className="text-lg font-bold">Oops!!! You are Looking offline</h1>
    );
  }
  return resObj?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div>
      <div className="ml-12">
        <div className="flex gap-4 filter my-12">
          <div className="flex">
            <input
              type="text"
              className="border border-r-0 rounded rounded-r-none p-3"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              type="button"
              className="p-3 border  rounded-l-none bg-[#f0f0f0] rounded hover:bg-[#ababab]"
              onClick={() => {
                const filteredData = resObj?.filter((res) =>
                  res.info.name.toLowerCase().includes(search.toLowerCase())
                );
                setSearchedData(filteredData);
                // console.log(filteredData);
              }}
            >
              Search
            </button>
          </div>
          <button
            onClick={() => {
              const filteredList = resObj.filter(
                (res) => res.info.avgRating < 4.3
              );
              setSearchedData(filteredList);
            }}
            className="border cursor-pointer p-3 bg-[#f0f0f0] rounded hover:bg-[#ababab]"
          >
            Top Rated Restuarants
          </button>
        </div>
        <div className="flex flex-wrap">
          {searchedData?.map((res) => (
            <Link key={res?.info?.id} to={"/restaurant/" + res?.info.id}>
              {res.info?.promoted ? (
                <RestaurantCardPromoted resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
