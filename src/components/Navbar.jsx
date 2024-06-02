import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <div>
        <div className="header">
          <h1>React Redux</h1>
        </div>
        <ul className="List">
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/cart"}>
            <li>Cart ({items.length})</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
