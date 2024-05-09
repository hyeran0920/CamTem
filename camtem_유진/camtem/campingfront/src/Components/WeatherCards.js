import React from "react";
import clear from "../images/clear.png";
import cloud from "../images/cloud.png";
import Image from "react-bootstrap/Image";

function WeatherCards() {
  return (
    <div>
    <Image src={clear} style={{ width: "100px" }} />
    <Image src={cloud} style={{ width: "100px" }} />
    </div>
  );
}

export default WeatherCards;
