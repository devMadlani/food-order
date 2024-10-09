import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  const dispatch = useDispatch()
  const handleClearCart = () =>{
        dispatch(clearCart(cartItems))
  }

  return (
    <div>
      <div className="text-center my-2 p-4 ">
        <div className="flex justify-between gap-6 items-center mb-8 w-6/12 mx-auto">
          <h1 className="text-2xl font-bold ">Your Cart</h1>
          <button
            className="border font-medium rounded-lg py-3 px-2 bg-[#f0f0f0] hover:bg-[#ada5a5]"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        <div className="w-6/12 mx-auto">
        {cartItems.length === 0 && <h1>Your Cart is Empty!!! Add items to Cart
        </h1> }
          <ItemList items={cartItems} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
