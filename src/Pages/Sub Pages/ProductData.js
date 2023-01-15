import React from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
const Data = [
  {
    title: "Album 1",
    name: "Men Regular Fit Solid Casual Shirt",
    price: 100,
    originalPrice: 2550,
    off: "95%",
    rating: "4★",
    noOfRatingReviews: "123 Ratings and 1345 Reviews",
    AvailableOffers: {
      one: " Get at flat ₹339 T&C",
      two: " Purchase now & get a surprise cashback coupon for January",
      three: " 5% Cashback on Flipkart Axis Bank Card T&C",
    },
    imageUrl: {
      img0: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      img1: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      img2: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      img3: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      img4: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    id: "p1",
  },
  {
    title: "Album 2",
    name: "Men Full Sleeve Printed Hooded Sweatshirt",
    price: 50,
    originalPrice: 250,
    off: "75%",
    rating: "4★",
    noOfRatingReviews: "123,05 Ratings and 17,345 Reviews",
    AvailableOffers: {
      one: " Get at flat ₹339 T&C",
      two: " Purchase now & get a surprise cashback coupon for January",
      three: " 5% Cashback on Flipkart Axis Bank Card T&C",
    },
    imageUrl: {
      img0: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      img1: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      img2: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      img3: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      img4: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    id: "p2",
  },
  {
    title: "Album 3",
    name: "Men Slim Fit Printed Spread Collar Casual Shirt",
    price: 70,
    originalPrice: 1650,
    off: "25%",
    rating: "4★",
    noOfRatingReviews: "123,05 Ratings and 17,345 Reviews",
    AvailableOffers: {
      one: " Get at flat ₹339 T&C",
      two: " Purchase now & get a surprise cashback coupon for January",
      three: " 5% Cashback on Flipkart Axis Bank Card T&C",
    },
    imageUrl: {
      img0: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      img1: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      img2: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      img3: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      img4: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    id: "p3",
  },
  {
    title: "Album 4 ",
    name: "Men Regular Fit Solid Formal Shirt",
    price: 70,
    originalPrice: 1650,
    off: "25%",
    rating: "4★",
    noOfRatingReviews: "123,05 Ratings and 17,345 Reviews",
    AvailableOffers: {
      one: " Get at flat ₹339 T&C",
      two: " Purchase now & get a surprise cashback coupon for January",
      three: " 5% Cashback on Flipkart Axis Bank Card T&C",
    },
    imageUrl: {
      img0: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      img1: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      img2: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      img3: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      img4: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    id: "p4",
  },
];

function ProductData() {
  const params = useParams();
  const product = Data.find((data) => data.id === params.productId);
  return (
    <div>
      <ProductDisplay item={product}></ProductDisplay>
    </div>
  );
}

export default ProductData;
