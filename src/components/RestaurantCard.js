import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, totalRatingsString, costForTwo, sla } = resData;

  return (
    <div className='res-card'>
      <img className='res-logo' src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      <h4 className='cuisines'>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars ({totalRatingsString} ratings)</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
