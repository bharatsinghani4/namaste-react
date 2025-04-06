import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurantCards from "../utils/useFetchRestaurantCards";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const { allRestaurants, filteredRestaurants } = useFetchRestaurantCards();
  const [searchText, setSearchText] = useState("");

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

    setAllRestaurants(topRatedRestaurantsArr);
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
      <div className="filter">
        <div className="seacrh">
          <input
            type="text"
            placeholder="Search for restaurant"
            className="search-box"
            value={searchText}
            onChange={onSearchInputChangeHandler}
          />
          <button
            type="button"
            className="search-btn"
            onClick={onSearchClickHandler}
          >
            Search
          </button>
        </div>
        <button
          type="button"
          className="filter-btn"
          onClick={onClickHandler}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
