import React, { useState, useEffect } from "react";
import axios from "axios";

import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [item, setUpdateItem] = useState([]);

  let email = localStorage.getItem("email");
  const [Email, setEmail] = useState("");
  const setmyemail = (e) => {
    setEmail(e);
  };

  const getdata = async () => {
    // console.log("getdata");
    try {
      let res = await axios.get(`${process.env.REACT_APP_DOMAIN}/cart${email}`);
      setUpdateItem(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log("getData", email);
    if (email) {
      getdata();
    }
  }, [Email]);

  const addItemToCartHandler = (newItem) => {
    const existingCartItemIndex = cartContext.items.findIndex(
      (item) => item.id === newItem.id
    );
    const existingCartItem = cartContext.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      let { _id } = existingCartItem;
      console.log(_id);

      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + newItem.quantity,
      };

      delete updatedItem._id;
      axios
        .put(`${process.env.REACT_APP_DOMAIN}/cart${email}/${_id}`, updatedItem)
        .then((res) => {
          console.log(res.data, "Successfull");
          getdata();
        })
        .catch((error) => {
          alert(error);
        });

      // setUpdateItem((prev) => {
      //   updatedItems = [...prev];
      //   updatedItems[existingCartItemIndex] = updatedItem;
      //   return updatedItems;
      // });
    } else {
      axios
        .post(`${process.env.REACT_APP_DOMAIN}/cart${email}`, newItem)
        .then((res) => {
          //console.log(res)
          getdata();
        })
        .catch((err) => {
          console.log(err);
        });
      // setUpdateItem((prev) => {
      //   return [...prev, newItem];
      // });
    }
  };
  const removeItemFromCartHandler = (data) => {
    console.log(data);
    const existingCartItemIndex = cartContext.items.findIndex(
      (item) => item.id === data.elem.id
    );
    const existingCartItem = cartContext.items[existingCartItemIndex];
    let updatedItems;

    // setUpdateItem((prev) => {
    //   // updatedItems = [...prev];
    //   updatedItems = cartContext.items.filter((item) => item.id !== data.elem.id);

    //   return updatedItems;
    // });
    axios
      .delete(`${process.env.REACT_APP_DOMAIN}/cart${email}/${data.elem._id}`)
      .then((res) => {
        getdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cartContext = {
    items: item,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    set: setmyemail,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
