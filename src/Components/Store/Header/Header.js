import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col, Card } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Container fluid="100" className="mt-1 ">
        <Row>
          <Col>
            <Card style={{ backgroundColor: "gray", height: "10rem" }}>
              <Card.Text
                className="mx-auto display-1"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Metal Mania",
                }}
              >
                The Generics
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
