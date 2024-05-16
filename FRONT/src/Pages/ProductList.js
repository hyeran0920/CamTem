import { Col, Container, Row } from "react-bootstrap";
import TopNav from "../Components/TopNav";
import WeatherCard from "../Components/WeatherCard";
import SearchBar from "../Components/Reservation";
import CenterContent from "../Components/CenterContent";
import Reservation from "../Components/Reservation"
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Camping from "../Components/Camping";


function ProductList() {
  const weatherData = useSelector((state) => state.weatherData);
  const campingData = useSelector((state) => state.campingData);
  return (
    <div className="productList">
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <TopNav bg="dark" theme="dark" />
        <div style={{ backgroundColor: "#f5f5f5" }}>
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
        </div>
        {campingData.map((camping, index) => (
          <Camping key={index} camping={camping} />
        ))}
      </Container>
      <Footer />
    </div>
  );
}
export default ProductList;