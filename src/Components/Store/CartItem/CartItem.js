import React from "react";
import "./CartItem.css";

function CartItem(props) {
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
          <button className="cartQuantityButton">remove</button>
        </span>
      </div>
    </>
  );
}

export default CartItem;
