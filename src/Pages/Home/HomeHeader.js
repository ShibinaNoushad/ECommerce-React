import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Card } from "react-bootstrap";
import "./HomeHeader.css";

function HomeHeader() {
  return (
    // <div>
    //   <Container fluid="100" className="mt-1 ">
    //     <Row>
    //       <Col>
    //         <Card style={{ backgroundColor: "gray", height: "23rem" }}>
    //           <Card.Text className="header mx-auto display-1">
    //             The Generics
    //           </Card.Text>
    //           <button className="button">Get Our Latest Album</button>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    <div>
      <Row>
        <Col>
          <div className="header">
            <h1 className="gen">The Generics</h1>
            <button className="bn">Get Our Latest Album</button>
            <button className="play-bton">►</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HomeHeader;
