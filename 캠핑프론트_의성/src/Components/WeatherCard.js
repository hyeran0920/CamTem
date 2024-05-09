import { Card, Button, CardText } from "react-bootstrap";
import exImg from "../images/ex.jpg";
import 구름 from "../images/구름.png";
import 구름뒤해 from "../images/구름뒤해.png";
import 구름많음 from "../images/구름많음.png";
import 맑음 from "../images/맑음.png";
import 비 from "../images/비.png";

function WeatherCard({ weather }) {
  // Unix timestamp를 'yyyy-MM-dd' 형식의 날짜 문자열로 변환하는 함수
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // JavaScript의 Date 객체는 밀리초를 기대합니다.
    return date.toLocaleDateString("ko-KR"); // 'ko-KR' 로케일을 사용하여 날짜를 포맷합니다.
  };

  // 날씨 상태를 한국어 설명으로 변환하는 함수
  const translateWeatherCondition = (condition) => {
    const conditions = {
      Rain: "비",
      Clouds: "구름 많음",
      Clear: "맑음",
      Snow: "눈옴",
      // 추가적인 날씨 상태를 여기에 매핑할 수 있습니다.
    };
    return conditions[condition] || condition; // 매핑된 값이 없으면 원래 상태를 반환
  };

  //날씨에 따른 이미지 파일 선택하는 함수
  const getWeatherImage = (condition) => {
    switch (condition) {
      case "Rain":
        return 비;
      case "Clear":
        return 맑음;
      case "Clouds":
        return 구름많음;
      default:
        return null;
    }
  };
  //날씨에 따른 선택된 이미지
  const weatherImage = getWeatherImage(weather.weather[0].main);

  return (
    <Card border="secondary" style={{ width: "14rem", margin: "10px 10px" }}>
      <CardText style={{ textAlign: "center", fontWeight: "bold" }}>{formatDate(weather.dt)}</CardText>
      <Card.Img variant="top" src={weatherImage} alt="날씨 이미지" />
      <Card.Body>
        {/* <Card.Title>{weatherData[0].weather[0].main}</Card.Title> */}
        <Card.Text>
          평균온도 : {weather.temp.day}°C
          <br />
          최고온도 : {weather.temp.max}°C
          <br />
          최저온도 : {weather.temp.min}°C
          <br />
          날씨 : {translateWeatherCondition(weather.weather[0].main)}
          <br />
          날씨설명{weather.weather[0].description}
          <br />
          강수확률 : {weather.pop * 100}%
          <br />
          {weather.rain && <>강수량 : {weather.rain}mm</>}
          <br />
          12시 체감온도:{weather.feels_like.day}
          <br />
          00시 체감온도:{weather.feels_like.night}
          <br />
          저녁 체감온도:{weather.feels_like.eve}
          <br />낮 체감온도:{weather.feels_like.morn}
          <br />
          습도 : {weather.humidity}
          <br />
        </Card.Text>
        <Button variant="primary">캠핑장추천?</Button>
      </Card.Body>
    </Card>
  );
}
export default WeatherCard;
