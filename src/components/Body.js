import { useState } from "react";

import { RESTAURANT_DATA } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [topRatedRestaurants, setTopRatedRestaurants] = useState(RESTAURANT_DATA || []);

  const onClickHandler = () => {
    const topRatedRestaurantsArr = topRatedRestaurants.length > 0 && topRatedRestaurants.filter(restaurant => restaurant?.info?.avgRating > 4.5);

    setTopRatedRestaurants(topRatedRestaurantsArr);
  };

  return (
    <div className='body'>
      <div className='filter'>
        <button type="button" className="filter-btn" onClick={onClickHandler}>Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {
          topRatedRestaurants.length > 0 &&
          topRatedRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />)}
      </div>
    </div>
  );
};

export default Body;
