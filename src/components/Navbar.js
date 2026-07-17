import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { user, logout } = useAuth();
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  // Calculate total quantity of items in cart
  const cartCount = cart.reduce(
    (total, item) => total + item.amount,
    0
  );


  return (

    <nav className="navbar">

      <h2>
        StreamList
      </h2>


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
          Cart ({cartCount})
        </Link>

        <Link to="/about">
          About
        </Link>


        {user ? (
          <button onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            Login
          </Link>
        )}


      </div>

    </nav>

  );

}

export default Navbar;