import React from "react";
import ItemList from "./ItemList";

function ResCategory(props) {
  const { data } = props;
//   console.log(data.itemCards.length);
//   console.log(props);
  return (
    <div>
      <div className="w-6/12  shadow-lg p-4 mx-auto my-4 ">
        <div className="flex justify-between">
          <span className="text-[rgba(2,6,12,0.92)] font-extrabold text-lg py-1">
            {data.title} ({data.itemCards.length})
          </span>
          <span>+</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
}

export default ResCategory;
