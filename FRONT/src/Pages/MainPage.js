import bgImage from "../images/mainimage1.jpg";
import { Container, Card, Button } from "react-bootstrap";
import TopNav from "../Components/TopNav";
import CenterContent from "../Components/CenterContent";
import CircleButton from "../Components/CircleButton";
import CheckCalendar from "../Components/CheckCalendar";
import CampCards from "../Components/CampCards";
import Koreamap from "../Components/KoreaMap";
import Calendar2 from "../Components/Calendar2";
import Weather from "../Components/Weather";
import CampingArea from '../Components/CampingArea';
import Footer from "../Components/Footer";


import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

function MainPage() {
  const [location, setLocation] = useState("");
  const today = new Date();
  const todayDateString = today.toLocaleDateString("ko-KR");
  



  const handleLocationChange = (eventKey) => {
    setLocation(eventKey);
    const dateSection = document.getElementById("date-section");
    if (dateSection) {
      setTimeout(() => {
        dateSection.scrollIntoView({ behavior: "smooth" });
      }, 100); // 100ms 지연 후 스크롤 호출
    }
  };

  return (
    <div className="App">
      <Container
        fluid
        style={{ backgroundImage: "url(" + bgImage + ")", backgroundSize: "cover", width: "100%", height: "900px" }}
      >
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <TopNav bg="transparent" theme="dark" />
        </div>
        <h1 style={{ color: "white", fontSize: "3rem", paddingTop: "70px" }} className="where">
          어디로 떠날까요?
        </h1>
        <CenterContent />
        <h1
          style={{
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            margin: "80px 0 30px 0",
            textAlign: "left",
            padding: "0 150px",
          }}
        >
          오늘의 추천
        </h1>
        <CircleButton location={location} handleLocationChange={handleLocationChange} />
      </Container>


      <Container id="date-section" fluid style={{ width: "100%", display: "flex", marginBottom: "70px" }}>
        {/* 왼쪽 섹션 */}

        <div style={{ flex: 1, marginLeft: "20px", textAlign: "center",marginTop:"50px" }}>
          <h3 style={{ color: "#333", fontWeight: "bold", marginBottom: "20px" }}>
            언제 떠날까요?
          </h3>
          <div style={{ marginTop: "85px", marginBottom: "75px" }}>
            <Calendar2 />
          </div>
        </div>

        {/* 오른쪽 섹션 */}
        <div style={{ flex: 1.5, textAlign: "center", marginBottom: "0",marginTop:"50px" }}>
          <h1 style={{ color: "#333", fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
            {location} #예상날씨
          </h1>
          <div className="weather-card" style={{ padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
          <Weather key={todayDateString} location={location} />          </div>
          <div className="activity-section" style={{ padding: "10px", borderRadius: "10px" }}>
          <CampCards location={location} handleLocationChange={handleLocationChange} />          </div>
        </div>
      </Container>



      <Container fluid style={{ width: "100%" }}>
        <h1>{location} 추천 캠핑장</h1>
        <br />
        <br />
        <br />
        <div style={{ display: "flex" }}>
          {/* 왼쪽 세션 */}
          <div style={{ width:"65%" , paddingRight: "10px" }}>
            <CampingArea location={location} handleLocationChange={handleLocationChange} />
          </div>

          {/* 오른쪽 세션 */}
          <div style={{ width:"30%", paddingLeft: "10px" }}>
          <Koreamap location={location} setLocation={setLocation} />
          </div>
        </div>
      </Container>
        <Footer />
    </div>
  );
}


export default MainPage;
