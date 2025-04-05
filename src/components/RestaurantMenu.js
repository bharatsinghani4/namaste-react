import { useEffect, useState } from "react";
import { CDN_URL, SWIGGY_RESTAURANT_MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const response = await fetch(SWIGGY_RESTAURANT_MENU_API_URL + id);
    const data = await response.json();

    setResInfo(data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cloudinaryImageId, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards ||
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h2>Cuisines: {cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
