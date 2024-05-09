import React from "react";
// import hot from "../images/mainimage1.jpg";
import hot from "../images/mainimage1.jpg";
import Image from "react-bootstrap/Image";

function WeatherCards() {
  return <Image src={hot} style={{ width: "200px" }} />;
}

export default WeatherCards;
