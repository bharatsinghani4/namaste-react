import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_MENU_API_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const response = await fetch(SWIGGY_RESTAURANT_MENU_API_URL + id);
    const data = await response.json();

    setResInfo(data);
  };

  return resInfo;
};

export default useRestaurantMenu;
