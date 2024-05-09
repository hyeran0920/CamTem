import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeWeatherData } from "../store";
import WeatherAPI from './WeatherAPI';
import WeatherCard from "./WeatherCard"; // WeatherCard 파일 경로에 따라 수정

function WeatherComponent({ location }) {
    const [selectedRegion, setSelectedRegion] = useState(location); // 기본 지역을 location으로 설정
    const weatherDataFromRedux = useSelector((state) => state.weatherData);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await WeatherAPI.getWeather(selectedRegion);
                dispatch(changeWeatherData(data)); // Redux를 통해 날씨 데이터 변경
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather(); // 컴포넌트가 마운트될 때마다 날씨 데이터 요청

    }, [selectedRegion, dispatch]);

    useEffect(() => {
        // location이 변경될 때마다 selectedRegion 업데이트
        setSelectedRegion(location);
    }, [location]);

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value); // 사용자 입력에 따라 지역 변경
    };

    return (
        <div>
            {/* 날씨 데이터를 이용한 UI 표시 */}
            {weatherDataFromRedux && (
                <div>
                    {/* 지역에 해당하는 날씨 데이터를 보여주는 UI */}
                    {weatherDataFromRedux.map((weather, index) => (
                        <WeatherCard key={index} weather={weather} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default WeatherComponent;
// import React, { useEffect, useState } from "react";
// // import hot from "../images/mainimage1.jpg";
// import hot from "../images/mainimage1.jpg";
// import Image from "react-bootstrap/Image";
// import axios from "axios";

// //WeatherCards 원래 파일 이름임!
// function MainWeatherCards() {
//   //날씨 api 불러오기
//   const [weatherDt, setWeatherDt] = useState(null);

//   useEffect(()=>{

//     const fetchData = async() =>{
//       try{
//         const response = await axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q={region}&cnt=16&appid=a4c7b6d4736add0a40a6369aec10ddf6&units=metric");
//         setWeatherDt(response.data);
//       }catch(e){
//         console.log("api를 가져오는데 실패했습니다." + e)
//       }
//     };
//     fetchData();
//   },[]);

//   return(
//     //불러온 날씨 api 보여주는 부분
//     <div>
//       {weatherDt && (
//         <div>
//         <p className="SeoulNowtemp">{weatherDt.main.temp}</p>
//         <p className="SeoulLowtemp">{weatherDt.main.temp_min}</p>
//         <p className="SeoulHightemp">{weatherDt.main.temp_max}</p>
//         <img
//           src={`http://openweathermap.org/img/wn/${weatherDt.weather[0].icon}.png`}
//           alt={weatherDt.weather[0].description}
//           className="SeoulIcon"
//         />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MainWeatherCards;
// // return <Image src={hot} style={{ width: "200px" }} />;
