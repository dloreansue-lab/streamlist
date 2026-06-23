import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px" }}>
      <h2 style={{ marginRight: "20px" }}>StreamList</h2>

      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;