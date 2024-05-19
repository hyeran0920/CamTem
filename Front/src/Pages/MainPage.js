import bgImage from "../images/mainimage1.jpg";
import { Container } from "react-bootstrap";
import TopNav from "../Components/TopNav";
import CenterContent from "../Components/CenterContent";
import CircleButton from "../Components/CircleButton";
import Koreamap from "../Components/KoreaMap";
import CampingArea from '../Components/CampingArea';
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import "../css/MainPage.css";

function MainPage() {

  const [location, setLocation] = useState("서울");

  const handleLocationChange = (eventKey) => {
    setLocation(eventKey);
  };

  useEffect(() => {
    const dateSection = document.getElementById("date-section");
    if (dateSection) {
        setTimeout(() => {
            dateSection.scrollIntoView({ behavior: "smooth" });
        }, 100); // 100ms 지연 후 스크롤 호출
    }
  }, [location]);

  return (
    <div className="App">
      <Container className="bgImage"
        fluid
        style={{ backgroundImage: "url(" + bgImage + ")", backgroundSize: "cover", width: "100%", height: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <TopNav bg="transparent" theme="dark" />
        </div>
        <h1 className="where">어디로 떠날까요?</h1>
        <CenterContent />
        <h1 className="recommendTitle">오늘의 추천</h1>
        <CircleButton location={location} handleLocationChange={handleLocationChange} />
      </Container>

      <Container>
        <br />
        <br />
        <h1 style={{ fontFamily: 'SUITE-Regular' }}>{location} 추천 캠핑장</h1>
        <br />
        <br />
        <div className="secondContent">
          <div className="leftContainer" id="date-section">
            <CampingArea location={location} handleLocationChange={handleLocationChange} />
          </div>
          <div className="rightContainer">
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
