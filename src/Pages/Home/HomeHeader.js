import React from "react";
import { Row, Col } from "react-bootstrap";
import "./HomeHeader.css";

function HomeHeader() {
  return (
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
