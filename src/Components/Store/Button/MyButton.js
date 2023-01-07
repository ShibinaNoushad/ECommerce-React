import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import { useState } from "react";
import CartContext from "../../../Store/CartContext";

function MyButton(props) {
  const [count, setcount] = useState(0);
  const cartcntx = useContext(CartContext);
  const cartLength=cartcntx.items.length;
  console.log(cartLength);

  return (
    <div>
      <button
        onClick={() => {
          props.onClick();
          console.log("show cart");
        }}
        style={{ backgroundColor: "ButtonHighlight", color: "black" }}
        className="me-auto"
      >
        Cart <Badge bg="secondary">{cartLength}</Badge>
      </button>
    </div>
  );
}

export default MyButton;
