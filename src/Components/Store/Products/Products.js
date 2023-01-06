import React from "react";
import { Col,Stack, Row, Card, Container, Button } from "react-bootstrap";

const Data = [
  {
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function Products() {
  return (
    <>
      <>
      {Data?.map((elem) => (
        <Stack direction="vertical"  className="  align-items-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={elem?.imageUrl} />
          </Card>
          <span>
            <h6>
              $ {elem?.price}{" "}
              <Button variant="primary mt-1">Add To Cart</Button>
            </h6>
          </span>
        </Stack>
      ))}
    </>
    </>
  );
}

export default Products;