import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./HomeNavbar.css";
import { NavLink } from "react-router-dom";
function HomeNavbar() {
  return (
    <div><Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="mx-auto" bg="dark" variant="dark" ml="3">
        <NavLink to="home" className="titlelabels">
          HOME
        </NavLink>
        <NavLink to="store" className="titlelabels" activeClassName="active">
          STORE
        </NavLink>
        <NavLink to="about" className="titlelabels">
          ABOUT
        </NavLink>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default HomeNavbar