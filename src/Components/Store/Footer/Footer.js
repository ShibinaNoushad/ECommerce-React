import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col, Card } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <Container fluid="100" className="mt-1 ">
        <Row>
          <Col>
            <Card style={{ backgroundColor: "deepskyblue", height: "7rem" }}>
              <Card.Text className="mx-auto footer display-5">
                The Generics
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
