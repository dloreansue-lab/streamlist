import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    total,
  } = useContext(CartContext);

  const navigate = useNavigate();


  return (
    <div className="stream-container">

      <h1>Shopping Cart</h1>


      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>

          {cart.map((item) => (

            <div 
              key={item.id}
              className="cart-item"
            >

              <h2>{item.service}</h2>

              <p>
                Price: ${item.price.toFixed(2)}
              </p>

              <p>
                Quantity: {item.amount}
              </p>


              <button
                onClick={() =>
                  updateQuantity(
                    item.id,
                    item.amount + 1
                  )
                }
              >
                +
              </button>


              <button
                onClick={() =>
                  updateQuantity(
                    item.id,
                    item.amount > 1
                      ? item.amount - 1
                      : 1
                  )
                }
              >
                -
              </button>


              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>


            </div>

          ))}


          <hr />


          <h2>
            Total: ${total.toFixed(2)}
          </h2>


          <button
            onClick={() =>
              navigate("/creditcard")
            }
          >
            Proceed to Checkout
          </button>


        </>
      )}

    </div>
  );
}

export default Cart;