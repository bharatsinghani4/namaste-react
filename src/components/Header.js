import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const onClickHandler = () =>
    setBtnText((text) => (text == "Login" ? "Logout" : "Login"));

  return (
    <div className="flex items-center justify-between p-3 shadow-lg">
      <div className="w-24 h-16">
        <img
          className="h-full w-full object-contain"
          src={LOGO_URL}
          alt="Namaste Food Logo"
        />
      </div>
      <ul className="flex items-center">
        <li
          data-testid="online-status"
          className="px-3"
        >
          {onlineStatus ? "Online 🟢" : "Offline 🔴"}
        </li>
        <li className="px-3">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-3">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-3">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-3">
          <Link to="/cart">Cart({cartItems.length})</Link>
        </li>
        <li>
          <button
            type="button"
            className="px-4 py-1 bg-green-200 rounded-sm ml-2 cursor-pointer"
            onClick={onClickHandler}
          >
            {btnText}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
