import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-3">{onlineStatus ? "Online 🟢" : "Offline 🔴"}</li>
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
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <button
          type="button"
          className="px-4 py-1 bg-green-200 rounded-sm ml-2 cursor-pointer"
          onClick={onClickHandler}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Header;
