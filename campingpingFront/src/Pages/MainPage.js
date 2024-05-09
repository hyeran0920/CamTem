import bgImage from "../images/mainimage1.jpg";
import { Container, Card, Button } from "react-bootstrap";
import TopNav from "../Components/TopNav";
import CenterContent from "../Components/CenterContent";
import CircleButton from "../Components/CircleButton";
import CheckCalendar from "../Components/CheckCalendar";
import CampCards from "../Components/CampCards";
import Koreamap from "../Components/KoreaMap";
import { useState, useEffect } from "react";
import axios from "axios";
import defaultImage from '../images/image44.png';
import WeatherComponent from "../Components/WeatherComponent";
import "../Components/KoreaMap.css";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function MainPage() {
  const [location, setLocation] = useState("");

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

      {/* 2번째 컨테이너 */}
      <Container id="date-section" fluid style={{ width: "100%", height:"680px", display: "flex", marginBottom:"70px",marginTop:"30px"}}>
            {/* 왼쪽 섹션 */}
            <div style={{ flex: 1, marginLeft:"20px", textAlign: "center" }}>
                <h3 style={{ color: "#333", fontWeight: "bold", marginBottom: "20px" }}>
                    언제 떠날까요?
                </h3>
                <div style={{ marginTop:"85px", marginBottom: "75px" }}>
                    <CheckCalendar />
                </div>
            </div>

            {/* 오른쪽 섹션 */}
            <div style={{ flex: 1.5, textAlign: "center", marginBottom:"0"}}>
                <h1 style={{ color: "#333", fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
                    {location} #예상날씨
                </h1>
                <div className="weather-card" style={{ padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
                    <WeatherComponent location={location} />
                </div>
                <div className="activity-section" style={{ padding: "10px", borderRadius: "10px" }}>
                    <CampCards location={location} handleLocationChange={handleLocationChange} />
                </div>
            </div>
        </Container>

        {/* 3번째 컨테이너 */}
        <Container fluid style={{ width: "80%" }}>
          <h1>{location} 추천 캠핑장</h1>
          <br />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "center", alignItems:'center'}}>
              {/* 왼쪽 세션 */}
              <div style={{ width:'60%', paddingRight: "10px" }}>
                  <CampingArea location={location} handleLocationChange={handleLocationChange} />
              </div>

              {/* 오른쪽 세션 */}
              <div style={{ width:'40%', paddingLeft: "10px" }}>
                <Koreamap location={location} handleLocationChange={handleLocationChange} />
              </div>
          </div> 
        </Container>

    </div>
  );
}

function CampingArea({ location }) {
  const [kk, setKk] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <BsArrowRightCircleFill/>,
    prevArrow: <BsArrowLeftCircleFill />,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=hbDw%2FtMHLuDxj0DparGpJaydrLr0Qx%2FKrwNhE0wlidNKKDLX0y8Tg%2BsyTPyrhvrRZXCGhyWuLQpneGP%2B5ko%2BBw%3D%3D&MobileOS=ETC&MobileApp=AppTest&mapX=127.3845475&mapY=36.3504119&radius=500000&numOfRows=500&_type=json"
        );
        console.log("Received data:",response.data.response.body.items.item );
        setKk(response.data.response.body.items.item);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [location]);

  return (
    <section className="carouselContainer" style={{ display: "flex", justifyContent: "center" }}>
      <Container className="carousel">
      <StyledSlider {...settings}>
        {kk && kk.map((item, idx)=>(
          <div className="carouselItem" key={idx}>
            <div className="carouselImg">
              <img src={item.firstImageUrl ? item.firstImageUrl : defaultImage } style={{ height:'300px', width: '100%', objectFit: 'cover' }}/>
            </div>
            <div className="cardText" style={{ padding: "10px" }}>
              <p className="facltName" style={{ fontSize: "20px", fontWeight: "bold" }}>{item.facltNm}</p>
              <p className="address" style={{ fontSize: "13px" }}>{item.addr1}</p>
              <Button href="#" style={{float:'right', marginBottom:'10px'}}>보러가기</Button>
            </div>
            </div>
        ))}
        </StyledSlider>
      </Container>
    </section>
  );
}

const StyledSlider = styled(Slider)`

  .carouselItem {
    // border-radius:0.75rem;
    overflow:hidden;
    // box-shadow: 5px 5px 5px lightGray;
    border:none;
    width: 90%;
  }

  .carouselImg{
    border-radius: 0.75rem 0.75rem 0 0;
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-slide {
  padding: 0 30px;
}

`

// function CampingArea({ location }) {
//   const [kk, setKk] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=hbDw%2FtMHLuDxj0DparGpJaydrLr0Qx%2FKrwNhE0wlidNKKDLX0y8Tg%2BsyTPyrhvrRZXCGhyWuLQpneGP%2B5ko%2BBw%3D%3D&MobileOS=ETC&MobileApp=AppTest&mapX=127.3845475&mapY=36.3504119&radius=500000&numOfRows=500&_type=json"
//         );
//         console.log("Received data:", response.data);

//         setKk(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [location]);

//   // "http://apis.data.go.kr/B551011/GoCamping/searchList?serviceKey=kpznyRO%2Bj%2BQrqgHf88dGEFWQ27h0A6d%2FfoqRDlYX2hveqpGN%2F9y6xda7hcdmJCJip6UoIdI3Pm7EEXiiArHyDg%3D%3D&MobileOS=ETC&MobileApp=AppTest&numOfRows=100&_type=json&keyword=푸른"
//   // "http://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=kpznyRO%2Bj%2BQrqgHf88dGEFWQ27h0A6d%2FfoqRDlYX2hveqpGN%2F9y6xda7hcdmJCJip6UoIdI3Pm7EEXiiArHyDg%3D%3D&MobileOS=ETC&MobileApp=AppTest&mapX=128.6142847&mapY=36.0345423&radius=20000&numOfRows=100&_type=json"

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <div
//         className="campingzang"
//         style={{ color: "#fff", display: "grid", width: "85%", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
//       >
//         {kk && kk.response.body.items.item
//         ? Object.values(kk.response.body.items.item)
//         .filter((item) => item.addr1 && item.addr1.includes(location) && item.firstImageUrl !== null)
//         .map((item, index) => (
//             <Card key={index} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
//             <Card.Img 
//                 variant="top" 
//                 src={item.firstImageUrl ? item.firstImageUrl : defaultImage } 
//                 style={{ height: '200px', objectFit: 'cover' }} 
//             />
//             <Card.Body style={{ flex: "1 0 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
//                 <div>
//                     <Card.Title>{item.facltNm}</Card.Title>
//                     <Card.Text style={{ fontSize: "13px" }}>
//                         {item.addr1}
//                     </Card.Text>
//                 </div>
//                 {/*<Button href="#">보러가기</Button>*/}
//             </Card.Body>
//             </Card>
//               ))
//           : null}
//       </div>
//     </div>
//   );
// }

export default MainPage;