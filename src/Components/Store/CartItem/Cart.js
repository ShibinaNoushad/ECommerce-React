import React from "react";
import { useContext } from "react";
import { Button, CloseButton } from "react-bootstrap";
import CartContext from "../../../Store/CartContext";
import Modal from "../../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartcntx = useContext(CartContext);
  let total = 0;
  cartcntx.items.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  return (
    <Modal>
      <CloseButton onClick={props.showCart} />
      <h5 className="heading">CART</h5>
      <div className="cartHeader cartRow">
        <span className="cartItem cartColumn">ITEM</span>
        <span className="cartPrice cartColumn">PRICE</span>
        <span className="cartQuantity cartColumn">QUANTITY</span>
      </div>

      {cartcntx.items.map((elem) => (
        <CartItem elem={elem} key={elem.title}></CartItem>
      ))}

      <div className="cartTotal">
        <span>
          <span className="totalTitle">
            <strong>Total</strong>
          </span>
          $<span>{total}</span>
        </span>
      </div>
      <Button>Purchase</Button>
    </Modal>
  );
}

export default Cart;
