import { Card, Button } from "react-bootstrap";
import exImg from "../images/ex.jpg";
import { useSelector } from "react-redux";

function WeatherCard() {
  const weatherData = useSelector((state) => state.weatherData);
  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src={exImg} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">캠핑장추천?</Button>
      </Card.Body>
    </Card>
  );
}
export default WeatherCard;
