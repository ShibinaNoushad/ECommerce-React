import React, { useState } from "react";
import CartProducts from "./Components/Store/CartItem/CartItem";
import CartItem from "./Components/Store/CartItem/CartItem";
import Footer from "./Components/Store/Footer/Footer";
import Header from "./Components/Store/Header/Header";
import MyNavbar from "./Components/Store/Navbar/Navbar";
import StorePage from "./Components/Store/StorePage";

function App() {
  const [cart, showCart] = useState(false);
  const showCartFun = () => {
    showCart((prev)=>{
      return !prev
    });
    console.log("app");
  };

  return (
    <>
      <MyNavbar showCart={showCartFun}></MyNavbar>
      <Header></Header> {cart && <CartItem showCart={showCartFun}/>}
      <StorePage></StorePage>
      <Footer></Footer>
    </>
  );
}

export default App;
