import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const onClickHandler = () => setBtnText(text => text == "Login" ? "Logout" : "Login");

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt='Namaste Food Logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button type="button" className="login-btn" onClick={onClickHandler}>{btnText}</button>
      </div>
    </div>
  );
};

export default Header;
