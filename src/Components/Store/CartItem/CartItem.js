import React from "react";
import { Button, CloseButton } from "react-bootstrap";
import Modal from "../../UI/Modal";
import "./CartItem.css";

const cartElements = [
  {
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

function CartProducts(props) {
  return (
    <Modal>
      <CloseButton onClick={props.showCart} />
      <h5 className="heading">CART</h5>
      <div className="cartHeader cartRow">
        <span className="cartItem cartColumn">ITEM</span>
        <span className="cartPrice cartColumn">PRICE</span>
        <span className="cartQuantity cartColumn">QUANTITY</span>
      </div>
      {cartElements?.map((elem) => (
        <div className="cartRow">
          <span className="cartItem cartColumn">
            <img className="cartImg" src={elem.imageUrl}></img>
            {/* <span>{elem.title}</span> */}
          </span>
          <span className="cartPrice cartColumn">{elem.price}</span>
          <span className="cartQuantity cartColumn">
            <span>{elem.quantity}</span>
            <button className="cartQuantityButton">remove</button>
          </span>
        </div>
      ))}

      <div className="cartTotal">
        <span>
          <span className="totalTitle">
            <strong>Total</strong>
          </span>
          $<span>12.99</span>
        </span>
      </div>
      <Button>Purchase</Button>
    </Modal>
  );
}

export default CartProducts;
