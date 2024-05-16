import bgImage from "../images/mainimage1.jpg";
import { Container } from "react-bootstrap";
import TopNav from "../Components/TopNav";
import CenterContent from "../Components/CenterContent";
import CircleButton from "../Components/CircleButton";
import Koreamap from "../Components/KoreaMap";
import CampingArea from '../Components/CampingArea';
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";


function MainPage() {
  
  const [location, setLocation] = useState("서울");
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
        style={{ backgroundImage: "url(" + bgImage + ")", backgroundSize: "cover", width: "100%", height: "100vh" }}
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
      <Container id="date-section" fluid style={{ width: "100%" }} >
        <br />
        <h1 style={{ fontWeight: "bold" }}>{location} 추천 캠핑장</h1>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent:"center"}}>
          {/* 왼쪽 세션 */}
          <div style={{ width: "50%", paddingRight: "10px", paddingTop:"90px"}}>
            <CampingArea location={location} handleLocationChange={handleLocationChange} />
          </div>

          {/* 오른쪽 세션 */}
          <div style={{ width: "35%", marginLeft: "100px" }}>
            <Koreamap location={location} setLocation={setLocation} />
          </div>
        </div>
        <br />
        <br />
        <br />
      </Container>
      <Footer />
    </div>
  );
}


export default MainPage;
