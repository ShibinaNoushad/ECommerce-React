import React from "react";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import classes from "../../Components/Store/Button/MyButton.module.css";

import MyButton from "../../Components/Store/Button/MyButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./AboutNavbar.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Store/AuthContext";
function AboutNavbar(props) {
  const authCtx = useContext(AuthContext);
  const location = useLocation();
  const loc = useHistory();
  const history = location.pathname;
  console.log(history);

  const removeToken = () => {
    authCtx.logout();
    loc.replace("/login");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto" bg="dark" variant="dark" ml="3">
            <NavLink to="home" className="titlelabels">
              HOME
            </NavLink>
            <NavLink
              to="store"
              className="titlelabels"
              activeClassName="active"
            >
              STORE
            </NavLink>
            <NavLink to="about" className="titlelabels">
              ABOUT
            </NavLink>
            <NavLink to="contactUs" className="titlelabels">
              CONTACT US
            </NavLink>
            {!authCtx.isLoggedIn && (
              <NavLink to="login" className="titlelabels">
                LOGIN
              </NavLink>
            )}
          </Nav>
          {history === "/store" ? (
            <MyButton onClick={props.showCart}></MyButton>
          ) : (
            ""
          )}
          {authCtx.isLoggedIn && (
            // <li>
            <button onClick={removeToken} className={classes.logout}>
              Logout
            </button>
            // </li>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default AboutNavbar;
