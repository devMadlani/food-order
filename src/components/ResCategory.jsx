import React, { useState } from "react";
import ItemList from "./ItemList";

function ResCategory(props) {
  const { data, showItems, setShowIndex } = props;
const handleClick = () => {
  setShowIndex()
}

  return (
    <div>
      <div className="w-6/12  shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-[rgba(2,6,12,0.92)] font-extrabold text-lg py-1">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="w-4">
            {" "}
            {showItems ? (
              <img
                src="/images/up-arrow.png"
                className="object-contain"
                alt=""
              />
            ) : (
              <img
                src="/images/down-arrow.png"
                className="object-contain"
                alt=""
              />
            )}
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
}

export default ResCategory;
