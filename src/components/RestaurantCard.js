import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, totalRatingsString, costForTwo, sla } = resData;

  return (
    <div className="w-[200px] p-2 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-200">
      <img
        className="rounded-md"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4>
        {avgRating} stars ({totalRatingsString} ratings)
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
