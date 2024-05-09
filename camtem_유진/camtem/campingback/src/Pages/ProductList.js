import { Container, Row } from "react-bootstrap";
import TopNav from "../Components/TopNav";
import WeatherCard from "../Components/WeatherCard";
import SearchBar from "../Components/Reservation";
import CenterContent from "../Components/CenterContent";

function ProductList() {
  return (
    <div className="productList">
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <TopNav bg="dark" theme="dark" />
        <CenterContent />
        <Row>
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </Row>
        <div
          className="scrollmenu"
          // style={{
          //   backgroundColor: "#333",
          //   overflow: "auto",
          //   whiteSpace: "nowrap",
          //   textAlign: "center",
          //   marginBottom: "20px",
          //   //나머지 밑의 스타일들은 index.css에있음
          // }}
        >
          <a href="#All">
            <i class="fa-solid fa-tents"></i>
            <br />
            전체
          </a>
          <a href="#promotion">
            <i class="fa-solid fa-rectangle-ad"></i>
            <br />
            프로모션
          </a>
          <a href="#family">
            <i class="fa-solid fa-people-group"></i>
            <br />
            가족여행
          </a>
          <a href="#sale">
            <i class="fa-solid fa-percent"></i>
            <br />
            할인
          </a>
          <a href="#newOpen">
            <i class="fa-solid fa-award"></i>
            <br />
            신규오픈
          </a>
          <a href="#onlyHere">
            <i class="fa-solid fa-user-secret"></i>
            <br />
            단독소개
          </a>
          <a href="#populerSpot">
            <i class="fa-solid fa-crown"></i>
            <br />
            인기장소
          </a>
          <a href="#pat">
            <i class="fa-solid fa-paw"></i>
            <br />
            반려동물
          </a>
        </div>
        <hr />
        <div className="캠핑장 목록">
          <div className="list">
            <img src="" />
            <div className="infomation">
              <h1>백두산 골든밸리 가족캠핑장</h1>
              <p>캠핑장 소개</p>
              <p>캠핑장 소개</p>
              <p>캠핑장 소개</p>
              <div className="icon-button-container">
                <div>
                  <i className="bi bi-wifi"></i>
                  <i className="bi bi-fire"></i>
                  <i className="bi bi-ev-station"></i>
                  <i className="bi bi-p-circle"></i>
                </div>
                <button>자세히 보기</button>
              </div>
            </div>
          </div>
          <div className="list">
            <img src="" />
            <div className="infomation">
              <h1>한라산 골든밸리 가족캠핑장</h1>
              <p>캠핑장 소개</p>
              <p>캠핑장 소개</p>
              <p>캠핑장 소개</p>
              <div className="icon-button-container">
                <div>
                  <i className="bi bi-wifi"></i>
                  <i className="bi bi-fire"></i>
                  <i className="bi bi-ev-station"></i>
                  <i className="bi bi-p-circle"></i>
                </div>
                <button>자세히 보기</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default ProductList;
