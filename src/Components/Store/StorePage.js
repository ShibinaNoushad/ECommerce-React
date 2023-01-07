import React from "react";
import Products from "./Products/Products";
import Header from "./Header/Header";
import MyNavbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Music from "./Music/Music";
const Data = [
  {
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    id: 1,
  },
  {
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    id: 2,
  },
  {
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    id: 3,
  },
  {
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    id: 4,
  },
];
function StorePage() {
  return (
    <div>
      <Music></Music>
      {Data.map((product) => (
        <Products elem={product} key={product.id}></Products>
      ))}
    </div>
  );
}

export default StorePage;
