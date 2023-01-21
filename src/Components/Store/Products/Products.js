import React, { useContext } from "react";
import { Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../../Store/CartContext";

function Products(props) {
  const cartcntxt = useContext(CartContext);
  const addProductToCart = () => {
    cartcntxt.addItem({ ...props.elem, quantity: 1 });
    console.log({ ...props.elem });
  };
  return (
    <>
      <Stack direction="vertical" className="  align-items-center mb-9">
        <h5>{props.elem.title}</h5>
        <Link to={`/store/${props.elem.id}`} id={props.elem.id}>
          <img src={props.elem?.imageUrl} style={{ width: "18rem" }}></img>
        </Link>
        <span>
          <h6>
            $ {props.elem?.price}{" "}
            <Button variant="primary mt-1 mb-3" onClick={addProductToCart}>
              Add To Cart
            </Button>
          </h6>
        </span>
      </Stack>
    </>
  );
}

export default Products;