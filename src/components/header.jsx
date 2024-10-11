import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const [isLoading, setIsLoding] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);
  
//Subscribing to store using Selector 
const cartItems = useSelector((store)=>store.cart.items)
// console.log(cartItems)
  return (
    <div className="header flex justify-between border gap-20 ">
      <div className="">
        <img className="w-28 " src={LOGO_URL} alt="" />
      </div>
      <div className="flex gap-14  items-center ml-12">
        <h1>{onlineStatus ? "Online" : "offline"}</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/grocery">Grocery</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/cart">
          <span className="font-bold">Cart - ({cartItems.length} items) </span>
        </Link>
      </div>
      <div className="flex items-center mr-8">
        <span className="font-bold text-[rgba(2,6,12,0.75)] text-lg  pr-5">
          {loggedInUser}
        </span>
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
