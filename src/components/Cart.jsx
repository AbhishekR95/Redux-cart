import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart Page</h3>
      <div className="productContainer">
        {cartItems.map((item) => (
          <div key={item.id} className="products">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <div className="desc">
              <span>{item.category.toUpperCase()}</span>
              <span>{item.price}</span>
            </div>
            <button className="remove" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
