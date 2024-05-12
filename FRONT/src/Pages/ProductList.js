import { Col, Container, Row } from "react-bootstrap";
import TopNav from "../Components/TopNav";
import WeatherCard from "../Components/WeatherCard";
import SearchBar from "../Components/Reservation";
import CenterContent from "../Components/CenterContent";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Camping from "../Components/Camping";


function ProductList() {
  const weatherData = useSelector((state) => state.weatherData);
  const campingData = useSelector((state) => state.campingData);

  return (
    <div className="productList">
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <TopNav bg="dark" theme="dark" />
        <CenterContent />
        <Row>
          {weatherData.map((weather, index) => (
            //각 날씨 데이터에 대해 weatherCard렌더링
            <WeatherCard key={index} weather={weather} />
            ))}
        </Row>
        {console.log("캠핑데이터" +campingData)}
        <div
          className="scrollmenu"
          >
          <a href="#All">
            <i className="fa-solid fa-tents"></i>
            <br />
            전체
          </a>
          <a href="#promotion">
            <i className="fa-solid fa-rectangle-ad"></i>
            <br />
            프로모션
          </a>
          <a href="#family">
            <i className="fa-solid fa-people-group"></i>
            <br />
            가족여행
          </a>
          <a href="#sale">
            <i className="fa-solid fa-percent"></i>
            <br />
            할인
          </a>
          <a href="#newOpen">
            <i className="fa-solid fa-award"></i>
            <br />
            신규오픈
          </a>
          <a href="#onlyHere">
            <i className="fa-solid fa-user-secret"></i>
            <br />
            단독소개
          </a>
          <a href="#populerSpot">
            <i className="fa-solid fa-crown"></i>
            <br />
            인기장소
          </a>
          <a href="#pat">
            <i className="fa-solid fa-paw"></i>
            <br />
            반려동물
          </a>
        </div>
        <hr />
        {campingData.map((camping, index) => (
          <Camping key={index} camping={camping}/>
        ))}
      </Container>
      <Footer />
    </div>
  );
}
export default ProductList;