import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic1 from "../images/item1.jpg";
import pic2 from "../images/item1.jpg";
import pic3 from "../images/item1.jpg";
import { Container, Row, Col } from "react-bootstrap";

function CampCards() {
  return (
    <Container className="cardParent">
      <div className="card1" style={{ float: "left" ,width: "200px", height: "75px"}}>
        <Card>
          <Card.Img
            variant="top"
            src={pic1}
            style={{ width: "95%", height: "75px", margin: "5px", float: "left" }}
          />
          <Card.Body>
            <Card.Title>캠핑장 이름</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className="card2" style={{ float: "left" ,width: "200px", height: "75px"}}>
        <Card>
          <Card.Img variant="top" src={pic2} style={{ width: "95%", height: "75px", margin: "5px" }} />
          <Card.Body>
            <Card.Title>캠핑장 이름</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className="card3" style={{ float: "left" ,width: "200px", height: "75px"}}>
        <Card>
          <Card.Img variant="top" src={pic3} style={{ width: "95%", height: "75px", margin: "5px" }} />
          <Card.Body>
            <Card.Title>캠핑장 이름</Card.Title>
          </Card.Body>
        </Card>
      </div>
      
    </Container>
  );
}

export default CampCards;
