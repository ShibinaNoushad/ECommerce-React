import React from "react";
import { Badge } from "react-bootstrap";
import { useState } from "react";

function MyButton(props) {
  const [count, setcount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          props.onClick();
          console.log("show cart")
        }}
        style={{ backgroundColor: "ButtonHighlight", color: "black" }}
        className="me-auto"
      >
        Cart <Badge bg="secondary">{count}</Badge>
      </button>
    </div>
  );
}

export default MyButton;
