import React, { useContext } from "react";
import { Col, Stack, Row, Card, Container, Button } from "react-bootstrap";
import CartContext from "../../../Store/CartContext";

function Products(props) {
  const cartcntxt = useContext(CartContext);
  const addProductToCart = () => {
    cartcntxt.addItem({ ...props.elem ,quantity:1});
    console.log({...props.elem});
  };
  return (
    <>
      <Stack direction="vertical" className="  align-items-center mb-9">
        <h5>{props.elem.title}</h5>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.elem?.imageUrl} />
        </Card>
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
