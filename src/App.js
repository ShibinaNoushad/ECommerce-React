import React, { useContext, useState } from "react";
import Cart from "./Components/Store/CartItem/Cart";
import Footer from "./Components/Store/Footer/Footer";
import Header from "./Components/Store/Header/Header";
import MyNavbar from "./Components/Store/Navbar/Navbar";
import StorePage from "./Components/Store/StorePage";
import CartContext from "./Store/CartContext";
import CartProvider from "./Store/CartProvider";
import { Route, Switch } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ProductDetail from "./Pages/Sub Pages/ProductData";
import ProductData from "./Pages/Sub Pages/ProductData";

function App() {
  const cartcntx = useContext(CartContext);
  console.log(cartcntx.items);
  const [cart, showCart] = useState(false);
  const showCartFun = () => {
    showCart((prev) => {
      return !prev;
    });
    console.log("app");
  };

  return (
    <CartProvider>
      <Switch>
        <Route path="/" exact>
          <MyNavbar showCart={showCartFun}></MyNavbar>
          <Header></Header> {cart && <Cart showCart={showCartFun} />}
          <StorePage></StorePage>
          <Footer></Footer>
        </Route>

        <Route path="/store" exact>
          <MyNavbar showCart={showCartFun}></MyNavbar>
          <Header></Header> {cart && <Cart showCart={showCartFun} />}
          <StorePage></StorePage>
          <Footer></Footer>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/contactus">
          <ContactUs></ContactUs>
        </Route>
        <Route path="/store/:productId">
          <MyNavbar></MyNavbar>
          <Header></Header>
          <ProductData></ProductData>
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
