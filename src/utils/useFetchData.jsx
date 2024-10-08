import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

function useFetchData(resId) {
  const [resInfo, setResInfo] = useState([]);
  const [itemCards, setItemCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [finalCategories, setFinalCategories] = useState([]);
    
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResInfo(json.data?.cards[2].card.card.info);
    setItemCards(
      json.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    setCategories(
      json.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
    

  };

  return [resInfo, itemCards, categories];
}

export default useFetchData;
