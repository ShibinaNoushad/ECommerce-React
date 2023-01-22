import React from "react";
import Header from "../../Components/Store/Header/Header";
import Cart from "../../Components/Store/CartItem/Cart";
import Footer from "../../Components/Store/Footer/Footer";
import StorePage from "../../Components/Store/StorePage";
import AboutNavbar from "../About/AboutNavbar";

function Store(props) {
  // console.log("store");
  return (
    <div>
      <AboutNavbar showCart={props.showMyCart}></AboutNavbar>
      <Header></Header> {props.cart && <Cart showCart={props.showMyCart} />}
      <StorePage></StorePage>
      <Footer></Footer>
    </div>
  );
}

export default Store;
