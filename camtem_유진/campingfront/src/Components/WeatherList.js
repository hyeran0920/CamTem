import React from "react";
import WeatherCard from "./WeatherCard";
import { useSelector } from "react-redux";

function WeatherCardList() {
  // Redux에서 weatherData 상태를 가져옵니다.
  const weatherData = useSelector((state) => state.weatherData);

  // weatherData 배열을 `map()` 함수로 반복적으로 렌더링합니다.
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center", // 수평 중앙 정렬
      gap: "10px" // 카드 간격
    }}>
      {weatherData.map((weatherDate, index) => (
        <WeatherCard key={index} weatherDate={weatherDate} />
      ))}
    </div>
  );
}

export default WeatherCardList;
