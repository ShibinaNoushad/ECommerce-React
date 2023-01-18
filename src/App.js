import React, { Suspense, useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "./Components/Store/CartItem/Cart";
import Store from "./Pages/Store/Store";
import AuthContext from "./Store/AuthContext";
import Header from "./Components/Store/Header/Header";
import MyNavbar from "./Components/Store/Navbar/Navbar";
import Login from "./Pages/Login/Login";
const About = React.lazy(() => import("./Pages/About/About"));
const Home = React.lazy(() => import("./Pages/Home/Home"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs/ContactUs"));
const ProductData = React.lazy(() => import("./Pages/Sub Pages/ProductData"));
const StorePage = React.lazy(() => import("./Components/Store/StorePage"));
// const Cart = React.lazy(() => import("./Components/Store/CartItem/Cart"));

function App() {
  const authCtx = useContext(AuthContext);
  const [cart, showCart] = useState(false);
  const showCartFun = () => {
    showCart((prev) => {
      return !prev;
    });
    console.log("app");
  };

  return (
    <Suspense fallback={<h6>Loading</h6>}>
      <Switch>
        <Route path="/" exact>
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
          {authCtx.isLoggedIn && <Redirect to="/store" />}
        </Route>
        <Route path="/login">
          <Login></Login>
          {authCtx.isLoggedIn && <Redirect to="/store" />}
        </Route>

        <Route path="/store" exact>
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
          {authCtx.isLoggedIn && <Store cart={cart} showMyCart={showCartFun} />}
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

        {/* <Route path="*" exact>
          {authCtx.isLoggedIn && <Redirect to="/store"></Redirect>}
          {!authCtx.isLoggedIn && <Redirect to="/login"></Redirect>}
        </Route> */}
      </Switch>
    </Suspense>
  );
}

export default App;
