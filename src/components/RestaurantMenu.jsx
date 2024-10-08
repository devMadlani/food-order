import React from "react";
import ShimmerUi from "./shimmerUi";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import ResCategory from "./ResCategory";
function RestaurantMenu() {
  const { resId } = useParams();
  const [resInfo, itemCards, categories] = useFetchData(resId);
  const listOfMenu = itemCards?.map((item) => item.card.info);
  console.log(categories);
  return resInfo?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div>
      <div className="text-center my-1">
        <h1 className="text-3xl font-bold mt-5 mb-2">{resInfo?.name}</h1>
        {/* <img src={CDN_URL + resInfo?.cloudinaryImageId} alt="img" className="w-[220px]" /> */}
        <h2 className="text-lg font-normal">
          {resInfo?.cuisines.join(", ")} - {resInfo?.costForTwoMessage}
        </h2>
        {categories?.map((category,index) => {
          return <ResCategory data={category.card.card} key={index} />;
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
