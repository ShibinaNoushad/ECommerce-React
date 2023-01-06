import React from "react";
import Products from "./Products/Products";
import Header from "./Header/Header";
import MyNavbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Music from "./Music/Music";
function StorePage() {
  return <div>
  <MyNavbar />
  <Header></Header>
  <Music></Music>
  <Products></Products>
  <Footer></Footer>
</div>;
}

export default StorePage;
