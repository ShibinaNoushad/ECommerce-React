import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MyButton from "../Button/MyButton";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

function MyNavbar(props) {
  const location = useLocation();
  const myLocation = location.pathname; // print
  console.log(myLocation);

  const history = useHistory();
  const myHistory = history.location.pathname; // print
  console.log(myHistory);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto py0 " bg="dark" variant="dark" ml="3">
            <NavLink to="/home" className="titlelabels">
              HOME
            </NavLink>
            <NavLink
              to="/store"
              className="titlelabels"
              activeClassName="active"
            >
              STORE
            </NavLink>
            <NavLink to="/about" className="titlelabels">
              ABOUT
            </NavLink>
            <NavLink to="/contactUs" className="titlelabels">
              CONTACT US
            </NavLink>
          </Nav>
          <MyButton onClick={props.showCart}></MyButton>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
