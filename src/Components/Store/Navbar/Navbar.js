import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MyButton from "../Button/MyButton";
function MyNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto" bg="dark" variant="dark" ml="3">
            <Navbar.Brand href="#home">HOME</Navbar.Brand>
            <Navbar.Brand href="#store">STORE</Navbar.Brand>
            <Navbar.Brand href="#about">ABOUT</Navbar.Brand>
          </Nav>
          <MyButton></MyButton>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;