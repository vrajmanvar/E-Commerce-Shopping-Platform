import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Welcome to Vraj's Shop</h1>
      </div>
      <div className="links">
        <NavLink to="/" className="shopping">
          Shop
        </NavLink>
        <NavLink to="/cart" className="cart_logo">
          <FaCartShopping size={27} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
