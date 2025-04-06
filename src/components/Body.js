import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurantCards from "../utils/useFetchRestaurantCards";

import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useFetchRestaurantCards();
  const [searchText, setSearchText] = useState("");
  const TopRatedRestaurant = withPromotedLabel(RestaurantCard);

  const onSearchInputChangeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const onSearchClickHandler = () => {
    const filteredRestaurants = allRestaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  const onClickHandler = () => {
    const topRatedRestaurantsArr =
      allRestaurants.length > 0 &&
      allRestaurants.filter((restaurant) => restaurant?.info?.avgRating > 4.5);

    setFilteredRestaurants(topRatedRestaurantsArr);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Looks like you're offline!!! Please check your internet connection.
      </h1>
    );

  return !filteredRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center justify-between p-3 mt-3">
        <div>
          <input
            type="text"
            placeholder="Search for restaurant"
            className="border-black border-solid border w-80 px-2 py-0.75"
            value={searchText}
            onChange={onSearchInputChangeHandler}
          />
          <button
            type="button"
            className="px-4 py-1 bg-green-200 rounded-sm ml-2 cursor-pointer"
            onClick={onSearchClickHandler}
          >
            Search
          </button>
        </div>
        <button
          type="button"
          className="px-4 py-1 bg-gray-300 rounded-sm cursor-pointer"
          onClick={onClickHandler}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="p-3 flex flex-wrap gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.5 ? (
              <TopRatedRestaurant resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
