import { Container, Row } from "react-bootstrap";
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

  // 날씨 데이터에서 흐림이나 비가 있는지 확인하는 함수
  const shouldRecommendCaravan = (weatherData) => {
    return weatherData.some(
      (weather) => weather.weather[0].main === "Rain" || weather.weather[0].main === "Clouds"
    );
  };

  // 카라반 캠핑장을 필터링하는 함수
  const filterCaravanCampings = (campingData) => {
    return campingData.filter(camping => camping.induty.includes("카라반"));
  };
  
  // 얘는 카라반만 나오는거
  // const filterCaravanCampings = (campingData) => {
  //   return campingData.filter(camping => camping.induty === "카라반");
  // };

  const recommendCaravan = shouldRecommendCaravan(weatherData);
  const caravanCampings = filterCaravanCampings(campingData);

  const handleNavigate = (camping) => {
    navigate(`/ProductDetail/${camping.contentId}`, { state: { camping } });
  };

  return (
    <div className="productList">
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <TopNav bg="dark" theme="dark" />
        <div>
          <br />
          <div style={{ width: "70%", margin: "10px auto" }}>
            <Reservation />
          </div>
          <Row className="justify-content-center">
            {weatherData.map((weather, index) => (
              // 각 날씨 데이터에 대해 WeatherCard 렌더링
              <WeatherCard key={index} weather={weather} />
            ))}
          </Row>
          <br />
          {recommendCaravan && (
            <CaravanRecommendation campingData={caravanCampings} onNavigate={handleNavigate} />
          )}
        </div>
        {campingData.map((camping, index) => (
          <Camping
            key={index}
            camping={camping}
            onNavigate={() => navigate(`/ProductDetail/${camping.contentId}`, { state: { camping } })}
          />
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default ProductList;

// import {Container, Row } from "react-bootstrap";
// import TopNav from "../Components/TopNav";
// import WeatherCard from "../Components/WeatherCard";
// import Reservation from "../Components/Reservation";
// import Footer from "../Components/Footer";
// import { useSelector } from "react-redux";
// import Camping from "../Components/Camping";
// import { createMemoryRouter, useNavigate } from "react-router-dom";
// import CaravanRecommendation from "../Components/CaravanRecommendation";

// function ProductList() {
//   const weatherData = useSelector((state) => state.weatherData);
//   const campingData = useSelector((state) => state.campingData);
//   const navigate = useNavigate();

//     // 날씨 데이터에서 흐림이나 비가 있는지 확인하는 함수
//     const shouldRecommendCaravan = (weatherData) => {
//       return weatherData.some(
//         (weather) => weather.weather[0].main === "Rain" || weather.weather[0].main === "Clouds"
//       );
//     };
  
//     const recommendCaravan = shouldRecommendCaravan(weatherData);
  
//     const handleNavigate = (camping) => {
//       navigate(`/ProductDetail/${camping.contentId}`, { state: { camping } });
//     };

//   return (
//     <div className="productList">
//       <Container fluid style={{ margin: 0, padding: 0 }}>
//         <TopNav bg="dark" theme="dark" />
//         <div>
//           <br />
//           <div style={{ width: "70%", margin: "10px auto" }}>
//             <Reservation />
//           </div>
//           <Row className="justify-content-center">
//             {weatherData.map((weather, index) => (
//               // 각 날씨 데이터에 대해 WeatherCard 렌더링
//               <WeatherCard key={index} weather={weather} />
//             ))}
//           </Row>
//           <br />
//           {recommendCaravan && (
//             <CaravanRecommendation campingData={campingData} onNavigate={handleNavigate} />
//           )}
//         </div>
//         {campingData.map((camping, index) => (
//           <Camping
//             key={index}
//             camping={camping}
//             onNavigate={() => navigate(`/ProductDetail/${camping.contentId}`, { state: { camping } })}
//           />
//         ))}
//       </Container>
//       <Footer />
//     </div>
//   );
// }
// export default ProductList;