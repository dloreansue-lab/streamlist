import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";


function Navbar() {

  const { cart } = useContext(CartContext);


  return (
    <nav className="navbar">

      <h2>StreamList</h2>


      <div>

        <Link to="/">
          Home
        </Link>


        <Link to="/movies">
          Movies
        </Link>


        <Link to="/subscriptions">
          Subscriptions
        </Link>


        <Link to="/cart">
          Cart ({cart.length})
        </Link>


        <Link to="/about">
          About
        </Link>

      </div>


    </nav>
  );

}


export default Navbar;