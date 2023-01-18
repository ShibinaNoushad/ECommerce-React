import React from "react";
import { useState } from "react";
import MyNavbar from "../../Components/Store/Navbar/Navbar";
import Header from "../../Components/Store/Header/Header";
import Cart from "../../Components/Store/CartItem/Cart";
import Footer from "../../Components/Store/Footer/Footer";
import ProductData from "../Sub Pages/ProductData";
import StorePage from "../../Components/Store/StorePage";
import { Route } from "react-router-dom";
import AboutNavbar from "../About/AboutNavbar";

function Store(props) {
  return (
    <div>
      
        {/* <MyNavbar showCart={props.showMyCart}></MyNavbar> */}
        <AboutNavbar showCart={props.showMyCart}></AboutNavbar>
        <Header></Header> {props.cart && <Cart showCart={props.showMyCart} />}
        <StorePage></StorePage>
        <Footer></Footer>
      
    </div>
  );
}

export default Store;
