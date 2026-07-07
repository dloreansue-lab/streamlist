import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const addToCart = (item) => {

    const subscriptionItems = [
      "Basic Subscription",
      "Gold Subscription",
      "Premium Subscription",
      "Social Media Sharing Subscription"
    ];


    const isSubscription = subscriptionItems.includes(item.service);


    if (isSubscription) {

      const alreadyHasSubscription = cart.some((cartItem) =>
        subscriptionItems.includes(cartItem.service)
      );


      if (alreadyHasSubscription) {
        alert("Only one subscription can be added at a time.");
        return;
      }

    }


    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id
    );


    if (existingItem) {

      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                amount: cartItem.amount + 1,
              }
            : cartItem
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...item,
          amount: 1,
        },
      ]);

    }

  };


  const removeFromCart = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    );

  };


  const updateQuantity = (id, amount) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              amount: amount,
            }
          : item
      )
    );

  };


  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.amount,
    0
  );


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );

}