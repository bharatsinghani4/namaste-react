import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANTS_API_URL } from "./constants";

const useFetchRestaurantCards = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  return { allRestaurants, filteredRestaurants };
};

export default useFetchRestaurantCards;
