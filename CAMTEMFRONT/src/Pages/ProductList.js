import React, { useEffect, useState } from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import TopNav from "../Components/TopNav";
import WeatherCard from "../Components/WeatherCard";
import Reservation from "../Components/Reservation";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import Camping from "../Components/Camping";
import { useNavigate } from "react-router-dom";
import CaravanRecommendation from "../Components/CaravanRecommendation";

function ProductList() {
  const weatherData = useSelector((state) => state.weatherData);
  const campingData = useSelector((state) => state.campingData);
  const navigate = useNavigate();

  const shouldRenderCaravanRecommendation = () => {
    // combinedData 배열을 순회하며 하나라도 강수확률이 50% 이상인 경우 true 반환
    for (const data of combinedData) {
      if (data.weather.pop > 0.5) {
        return true;
      }
    }
    return false; // 모든 요소의 강수확률이 50% 미만인 경우 false 반환
  };
  
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => { 
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      setWindowWidth(entry.contentRect.width);
    }
  });
  resizeObserver.observe(document.documentElement);
  return () => resizeObserver.disconnect();
}, []);

const isMobile = windowWidth <= 768;
    
// 처음 6개의 날씨 데이터만 사용
let limitedWeatherData;
if (isMobile) {
  limitedWeatherData = weatherData.slice(0, 1); // 모바일 환경에서는 첫 번째 카드만 출력
} else {
  limitedWeatherData = weatherData.slice(0, 6);
}

// 날씨 데이터만 제한하고, 캠핑 데이터는 모두 사용
const combinedData = limitedWeatherData.map((weather, index) => ({
  weather,
  camping: campingData[index], // 이 부분에서는 캠핑 데이터를 제한하지 않습니다.
}));


// 디버깅을 위해 콘솔 로그 추가
// useEffect(() => {
//   console.log('shouldRenderCaravanRecommendation:', shouldRenderCaravanRecommendation());
//   console.log('isMobile:', isMobile);
// }, [combinedData, isMobile]);


  return (
    <div className="productList">
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <TopNav bg="dark" theme="dark" />
        <div>
          <br />
          <div style={{ width: "70%", margin: "10px auto", marginTop:"0" }}>
            <Reservation />
          </div>
          <div className="d-flex justify-content-center flex-wrap">
  {combinedData.map((data, index) => (
    <div key={index} style={{ margin: "10px" }}>
      <WeatherCard weather={data.weather} />
    </div>
  ))}
</div>
 {/* 하나라도 강수확률이 50% 이상인 경우에만 캐러밴 추천을 렌더링합니다. */}
 {shouldRenderCaravanRecommendation() && (
            <div>
              {/* <p>Rendering CaravanRecommendation</p> 추가된 디버깅 출력 */}
              <CaravanRecommendation campingData={campingData} onNavigate={navigate} />
            </div>
          )}
          <br />
          {!isMobile && <hr style={{ width: "80%", margin: "0 auto" }} />} {/* isMobile이 아닐 때만 출력 */}
          {/* 날씨에 따라 카라반 캠핑장을 추천하는 컴포넌트 렌더링 */}
          {/* {recommendCaravan && (
            <CaravanRecommendation campingData={caravanCampings} onNavigate={handleNavigate} />
          )} */}
        </div>
        <div style={{width:"90%", margin:"0 auto"}}>
       {!isMobile &&<br/>}{/* isMobile이 아닐 때만 출력 */}
        {campingData.map((camping, index) => (
          <Camping
            key={index}
            camping={camping}
            showAddress={!isMobile}  // 모바일이 아닐 때만 주소를 보여줍니다.
            onNavigate={() => navigate(`/ProductDetail/${camping.contentId}`, { state: { camping } })}
          />
        ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default ProductList;