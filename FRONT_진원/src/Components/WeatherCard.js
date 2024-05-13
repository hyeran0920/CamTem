import { Card, Button, CardText } from "react-bootstrap";
import { TiWeatherSunny } from "react-icons/ti"; //맑은날
import { TiWeatherDownpour } from "react-icons/ti"; //비
import { TiWeatherCloudy } from "react-icons/ti"; //구름
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

  // 날씨 상태에 따른 아이콘 컴포넌트 매핑
  const weatherIcons = {
    Rain: <TiWeatherDownpour size="120" />,
    Clear: <TiWeatherSunny size="120" />,
    Clouds: <TiWeatherCloudy size="120" />,
    // 추가적인 날씨 상태에 대한 아이콘을 추가할 수 있습니다.
  };

  // 날씨 상태에 따른 아이콘 컴포넌트 가져오기
  const weatherIcon = weatherIcons[weather.weather[0].main];

  return (
    <Card border="secondary" className="mb-2" bg="info" text="white" style={{ width: "20%", margin: "10px 10px" }}>
      <Card.Header style={{ textAlign: "center", fontSize: "1.3rem" }}>{formatDate(weather.dt)}</Card.Header>
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "center" }}>{weatherIcon}</div>
        <Card.Text style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            습도 : {weather.humidity} <br /> 강수확률 : {weather.pop * 100}%
          </span>
          <span>{weather.temp.day}°C</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default WeatherCard;