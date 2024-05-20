import React from 'react';
import { Card } from "react-bootstrap";
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
    Rain: <TiWeatherDownpour size="80" />,
    Clear: <TiWeatherSunny size="80" />,
    Clouds: <TiWeatherCloudy size="80" />,
    // 추가적인 날씨 상태에 대한 아이콘을 추가할 수 있습니다.
  };

  // 날씨 상태에 따른 아이콘 컴포넌트 가져오기
  const weatherIcon = weatherIcons[weather.weather[0].main];

  return (
    <Card className="mb-2 shadow-sm" text="white" style={{ margin: "10px", border: "none", backgroundColor:"#73C2FB", width: "100%" }}>
      <Card.Body style={{ padding: "5px 3px" }}>
        <div style={{ fontSize: "18px", fontWeight:"600",textAlign: "center" }}>{formatDate(weather.dt)}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {weatherIcon}
          <div>
            <span>
              {Math.floor(weather.temp.min)}/ <span style={{ fontWeight: "bold", color:"#FF5B5B" }}>{Math.floor(weather.temp.max)} °C</span>
            </span>
            <br />
            <span style={{ fontSize: "13px" }}>강수확률: {weather.pop * 100}%</span>
            {weather.rain && weather.rain["3h"] !== undefined && (
              <span><br /> 강수량: {weather.rain["3h"]} mm</span>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
