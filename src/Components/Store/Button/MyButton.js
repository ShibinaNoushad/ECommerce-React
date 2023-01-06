import React from "react";
import { Badge } from "react-bootstrap";
import { useState } from "react";

function MyButton() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
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
