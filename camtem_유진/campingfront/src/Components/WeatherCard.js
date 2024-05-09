import { Card, Row, Col } from "react-bootstrap";
import exImg from "../images/ex.jpg";
import cloudImg from "../images/cloud.png"; // 예를 들어, 'cloud' 이미지를 위한 이미지 경로
import rainImg from "../images/rain.png";   // 예를 들어, 'rain' 이미지를 위한 이미지 경로
import clearImg from "../images/clear.png"; // 예를 들어, 'clear' 이미지를 위한 이미지 경로

function WeatherCard({ weatherDate }) {
  // weatherDate가 undefined인 경우, 초기 상태를 설정합니다.
  if (!weatherDate) {
    return null;
  }

  // main 값에 따라 이미지 소스를 선택합니다.
  let imgSrc;
  if (weatherDate.weather[0].main === "Clouds") {
    imgSrc = cloudImg;
  } else if (weatherDate.weather[0].main === "Rain") {
    imgSrc = rainImg;
  } else if (weatherDate.weather[0].main === "Clear") {
    imgSrc = clearImg;
  } else {
    imgSrc = exImg; // 기본 이미지
  }

  return (
    <Card style={{ width: "14rem" }}>
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>{weatherDate.formattedDt}</Card.Title>

        <Row>
          <Col xs={4} className="d-flex justify-content-center">
            <Card.Img 
              variant="top" 
              src={imgSrc} 
              alt="Weather Image" 
              style={{
                width: "200%",
                height: "auto", // 높이 자동 설정으로 비율 유지
                objectFit: "contain", // 이미지 비율 유지하면서 전체 공간을 채움
              }}
            />
          </Col>
          <Col xs={8}>
            {/* <Card.Text>{weatherDate.weather[0].main}</Card.Text> */}
            <Card.Text>{weatherDate.temp.min} °C<br/>{weatherDate.temp.max} °C</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
