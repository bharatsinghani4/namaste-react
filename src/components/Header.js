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
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="Namaste Food Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "Online 🟢" : "Offline 🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <button
          type="button"
          className="login-btn"
          onClick={onClickHandler}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Header;
