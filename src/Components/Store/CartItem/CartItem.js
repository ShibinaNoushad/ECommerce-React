import React from "react";
import { useContext } from "react";
import CartContext from "../../../Store/CartContext";
import "./CartItem.css";

function CartItem(props) {
  const cartcntx = useContext(CartContext);
  const removeItem = () => {
    cartcntx.removeItem(props);
  };
  return (
    <>
      <div className="cartRow">
        <span className="cartItem cartColumn">
          <img className="cartImg" src={props.elem.imageUrl}></img>
        </span>
        <span className="cartPrice cartColumn">
          {props.elem.price}{" "}
          <button className="button">{props.elem.quantity}</button>
        </span>
        <span className="cartQuantity cartColumn">
          <button className="cartQuantityButton" onClick={removeItem}>
            remove
          </button>
        </span>
      </div>
    </>
  );
}

export default CartItem;
