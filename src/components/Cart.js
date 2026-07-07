import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const {
    cart,
    removeFromCart,
    updateQuantity,
    total
  } = useContext(CartContext);


  return (
    <div className="stream-container">

      <h1>Your Cart</h1>


      {cart.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        <>

          {cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <h2>{item.service}</h2>

              <p>{item.serviceInfo}</p>

              <p>
                Price: ${item.price}
              </p>


              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={item.amount}
                  onChange={(e) =>
                    updateQuantity(
                      item.id,
                      Number(e.target.value)
                    )
                  }
                />
              </label>


              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>


              <hr />

            </div>

          ))}


          <h2>
            Total: ${total.toFixed(2)}
          </h2>

        </>

      )}

    </div>
  );

}

export default Cart;