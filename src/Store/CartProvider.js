import React, { useState } from "react";

import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [item, setUpdateItem] = useState([]);
  const addItemToCartHandler = (newItem) => {
    const existingCartItemIndex = cartContext.items.findIndex(
      (item) => item.id === newItem.id
    );
    const existingCartItem = cartContext.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + newItem.quantity,
      };
      setUpdateItem((prev) => {
        updatedItems = [...prev];
        updatedItems[existingCartItemIndex] = updatedItem;
        return updatedItems;
      });
    } else {
      setUpdateItem((prev) => {
        return [...prev, newItem];
      });
    }
  };
  // const removeItemFromCartHandler = (id) => {
  //   const existingCartItemIndex = cartContext.items.findIndex(
  //     (item) => item.id === id
  //   );
  //   const existingCartItem = cartContext.items[existingCartItemIndex];
  //   let updatedItems;

  //   if (existingCartItem && existingCartItem.quantity > 1) {
  //     const updatedItem = {
  //       ...existingCartItem,
  //       quantity: existingCartItem.quantity - 1,
  //     };
  //     setUpdateItem((prev) => {
  //       updatedItems = [...prev];
  //       updatedItems[existingCartItemIndex] = updatedItem;
  //       return updatedItems;
  //     });
  //   } else {
  //     setUpdateItem((prev) => {
  //       updatedItems = [...prev];
  //       updatedItems = cartContext.items.filter((item) => item.id !== id);

  //       return updatedItems;
  //     });
  //   }
  // };

  const cartContext = {
    items: item,
    addItem: addItemToCartHandler,
    // removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
