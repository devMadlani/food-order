import React from "react";
import { CDN_URL } from "../utils/constants";

function ItemList({ items }) {
//   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b border-gray-300 py-2 text-left"
        >
          <div className="flex justify-between gap-1">
            <div className="flex flex-col w-[430px] ">
              <span className="text-[20px] text-[rgba(2,6,12,0.75)] font-bold">
                {item.card.info.name}
              </span>
              <span className="text-[16px] font-semibold text-[rgba(2,6,12,0.92)] ">
                ₹ {item.card.info.price / 100}
              </span>
              <span className=" flex mt-3">
                <p className="text-[rgb(27,166,114)] text-xs font-bold mr-1">
                  {item.card.info.ratings.aggregatedRating.rating}
                </p>
                <p className="text-[rgba(2,6,12,0.6)] text-xs">
                  ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                </p>
              </span>
              <div className=" mt-3 ">
                <span className="text-[16px]  font-medium text-[rgba(2,6,12,0.6)] ">
                  {item.card.info.description}
                </span>
              </div>
            </div>
            <div className="max-w-[156px] ">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-[156px] h-[144px] rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
