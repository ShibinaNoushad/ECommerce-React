import React, { Suspense, useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CartProvider from "./Store/CartProvider";
import Cart from "./Components/Store/CartItem/Cart";
import Footer from "./Components/Store/Footer/Footer";
import Header from "./Components/Store/Header/Header";
import MyNavbar from "./Components/Store/Navbar/Navbar";
const About = React.lazy(() => import("./Pages/About/About"));
const Home = React.lazy(() => import("./Pages/Home/Home"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs/ContactUs"));
const ProductData = React.lazy(() => import("./Pages/Sub Pages/ProductData"));
const StorePage = React.lazy(() => import("./Components/Store/StorePage"));
// const Cart = React.lazy(() => import("./Components/Store/CartItem/Cart"));

function App() {
  const [cart, showCart] = useState(false);
  const showCartFun = () => {
    showCart((prev) => {
      return !prev;
    });
    console.log("app");
  };

  return (
    <CartProvider>
      <Suspense fallback={<h6>Loading</h6>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/store" />
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
            <MyNavbar showCart={showCartFun}></MyNavbar>
            <Header></Header>
            {cart && <Cart showCart={showCartFun} />}
            <ProductData></ProductData>
          </Route>
        </Switch>
      </Suspense>
    </CartProvider>
  );
}

export default App;
