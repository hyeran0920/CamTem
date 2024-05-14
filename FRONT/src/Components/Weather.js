import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { TiWeatherSunny, TiWeatherDownpour, TiWeatherCloudy } from "react-icons/ti";

function Weather(props) {
    const { location } = props;

    const [forecast, setForecast] = useState(null);

    // 한글 location을 영문으로 매핑하는 객체
    const locationMapping = {
        '서울': 'Seoul',
        '인천': 'Incheon',
        '부산': 'Busan',
        '대구': 'Daegu',
        '광주': 'Gwangju',
        '대전': 'Daejeon',
        '울산': 'Ulsan',
        '세종': 'Sejong',
        '경기도': 'Gyeonggi',
        '강원도': 'Gangwon',
        '충북': 'North Chungcheong',
        '충남': 'South Chungcheong',
        '전북': 'North Jeolla',
        '전남': 'South Jeolla',
        '경북': 'North Gyeongsang',
        '경남': 'South Gyeongsang',
        '제주도': 'Jeju',
    };

    // 한글 location을 영문으로 매핑
    const englishLocation = locationMapping[location] || location;

    useEffect(() => {
        const encodedLocation = encodeURIComponent(englishLocation);
        const apiKey = "a4c7b6d4736add0a40a6369aec10ddf6";
        const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${encodedLocation}&cnt=16&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setForecast(data);
            })
            .catch(error => {
                console.error("Error fetching the weather data:", error);
            });
    }, [englishLocation]);

    // Unix timestamp를 'yyyy-MM-dd' 형식의 날짜 문자열로 변환하는 함수
    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString("ko-KR");
    };

    // 날씨 상태를 한국어로 변환하는 함수
    const translateWeatherCondition = (condition) => {
        const conditions = {
            Rain: "비",
            Clouds: "구름 많음",
            Clear: "맑음",
            Snow: "눈",
            // 추가적인 조건을 정의할 수 있습니다.
        };
        return conditions[condition] || condition;
    };

    // 날씨 조건에 따른 아이콘
    const weatherIcons = {
        Rain: <TiWeatherDownpour size="80" />,
        Clear: <TiWeatherSunny size="80" />,
        Clouds: <TiWeatherCloudy size="80" />,
        // 추가적인 조건을 정의할 수 있습니다.
    };

    // 데이터가 로드된 후에 렌더링합니다.
    if (!forecast) {
        return <div>Loading...</div>;
    }

    const today = new Date();
    const todayDateString = today.toLocaleDateString("ko-KR");

    // forecast.list에서 오늘 날짜에 해당하는 날씨 데이터를 필터링합니다.
    const todayForecast = forecast.list.filter((data) => {
        const date = new Date(data.dt * 1000);
        const dateString = date.toLocaleDateString("ko-KR");

        // 오늘 날짜와 변환된 날짜를 비교하여 매핑합니다.
        return dateString === todayDateString;
    });

    // 오늘 날짜에 해당하는 날씨 데이터를 카드로 표시합니다.
    return (
        <div className="card-container" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
            {todayForecast.map((data) => {
                const weatherIcon = weatherIcons[data.weather[0].main];
                
                return (
                    <Card className="mb-2 shadow-sm" bg="info" text="white" style={{ width: "20%", margin: "10px 10px", border:"none"}}>
                        <Card.Body style={{ textAlign: "center" }}>
                                <span>{formatDate(data.dt)}</span>
                                
                            <div style={{ display: "flex", justifyContent: "center"}}>{weatherIcon}</div>
                            <br />  
                            <Card.Text style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{fontSize:"10px"}}>
                                강수확률: {data.pop * 100}%
                                {data.rain && data.rain["3h"] !== undefined && (
                                    <span><br /> 강수량: {data.rain["3h"]} mm</span>
                                )}
                            </span>
                            <span>
                            &nbsp;&nbsp;&nbsp;{data.main.temp.toFixed(1)}°C
                            </span>
                        </Card.Text>


                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
    
}

export default Weather;

