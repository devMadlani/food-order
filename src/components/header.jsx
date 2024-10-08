import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Header() {
  const [isLoading , setIsLoding] = useState(false)
  const onlineStatus = useOnlineStatus()
    return (
      <div className="header flex justify-between border">
        <div className="logo-container">
          <img className="w-28" src={LOGO_URL} alt="" />
        </div>
        <div className="flex gap-16 mr-12  items-center">
          <h1>{onlineStatus ? "Online" : "offline"}</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/grocery">Grocery</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/">Cart</Link>

          <div>
            <button
              onClick={() => {
                setIsLoding(!isLoading);
              }}
              className="w-20 py-2 rounded-md  bg-[#f0f0f0] text-sm font-medium"
            >
              {isLoading ? "Logout" : "Login"}{" "}
            </button>
          </div>
        </div>
      </div>
    );
}

export default Header;
