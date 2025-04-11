import { useParams } from "react-router-dom";

import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import Shimmer from "./Shimmer";
import RestaurantItemCategory from "./RestaurantItemCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    costForTwoMessage,
    cloudinaryImageId,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
  } = resInfo?.data?.cards[2]?.card?.card?.info;
  const itemCategories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div
      data-testid="restaurant-menu"
      className="max-w-4xl my-10 mx-auto p-4 border border-gray-400 rounded-md"
    >
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
        <div className="flex-auto mr-4">
          <h1 className="font-bold text-4xl">{name}</h1>
          <h2 className="font-bold mt-2">
            ⭐ {avgRating} ({totalRatingsString}) • {costForTwoMessage}
          </h2>
          <h2 className="mt-2 font-bold text-sm">{cuisines.join(", ")}</h2>
          <h2 className="mt-2 font-bold text-sm">
            {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
          </h2>
        </div>
        <div className="w-[128px] h-[128px] object-contain rounded-md overflow-hidden">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
      </div>
      <h2 className="text-center font-bold text-xl px-4 py-2 mb-4 bg-gray-200 rounded-md">
        MENU
      </h2>
      <ul>
        {itemCategories.map((category, index) => (
          <RestaurantItemCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
