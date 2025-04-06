import { useParams } from "react-router-dom";

import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

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
