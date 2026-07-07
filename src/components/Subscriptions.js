import React, { useContext } from "react";
import data from "../data";
import { CartContext } from "../context/CartContext";

function Subscriptions() {

  const { addToCart } = useContext(CartContext);


  return (
    <div className="stream-container">

      <h1>EZTechMovie Plans & Accessories</h1>

      <div className="product-grid">

        {data.map((item) => (

          <div className="product-card" key={item.id}>

            <img 
              src={item.img}
              alt={item.service}
            />

            <h2>
              {item.service}
            </h2>

            <p>
              {item.serviceInfo}
            </p>

            <h3>
              ${item.price}
            </h3>

            <button onClick={() => addToCart(item)}>
              Add To Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Subscriptions;