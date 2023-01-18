import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import { useState } from "react";
import CartContext from "../../../Store/CartContext";
import classes from "./MyButton.module.css";

function MyButton(props) {
  const [count, setcount] = useState(0);
  const cartcntx = useContext(CartContext);
  const cartLength = cartcntx.items.length;
  // console.log(cartLength);

  return (
    <div>
      <button
        onClick={() => {
          props.onClick();
        }}
        className={classes.cartButton}
      >
        Cart {cartLength}
      </button>
    </div>
  );
}

export default MyButton;
