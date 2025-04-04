import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTAURANTS_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const response = await fetch(SWIGGY_RESTAURANTS_API_URL);
    const data = await response.json();

    setAllRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
