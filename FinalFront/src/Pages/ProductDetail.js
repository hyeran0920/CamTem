import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import { Accordion, Carousel, Container, Image, Nav } from "react-bootstrap";
import item1 from "../images/item1.jpg";
import item2 from "../images/image45.png";
import item3 from "../images/image44.png";
import KakaoMap from "../Components/KakaoMap";
import { FaBullhorn, FaCrosshairs, FaQuestion } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

// 캠핑장 시설 아이콘 임포트
import { GiWoodPile } from "react-icons/gi";
import { MdOutlineLocalConvenienceStore } from "react-icons/md";
import { BsCupHot } from "react-icons/bs";
import { FaPlugCircleBolt } from "react-icons/fa6";
import { CiWifiOn } from "react-icons/ci";
import { GiTrail } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";

//반응형 css
import "../css/ProductDetail.css";
import "../css/TopNav.css";
import "../css/Footer.css";
import defaultImage from "../images/image44.png";

function ProductDetail() {
  // useParams : api에 요청한 url에 접근해서 100109 id를 가져올 수 있다.
  const { contentId } = useParams();
  const [content, setContent] = useState({});
  const location = useLocation();
  const { camping } = location.state; // 여기서 전달받은 camping 데이터에 접근합니다.

  // 페이지가 렌더링될 때 맨 위로 스크롤
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //NavTab에 클릭하면 그 페이지로 넘어가게 함.
  const clickCampingIntro = () => {
    const navTabSection1 = document.getElementById("clickCampingIntro");
    if (navTabSection1) {
      setTimeout(() => {
        navTabSection1.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const clickUseInfo = () => {
    const navTabSection2 = document.getElementById("clickUseInfo");
    if (navTabSection2) {
      setTimeout(() => {
        navTabSection2.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const clickLocationInfo = () => {
    const navTabSection3 = document.getElementById("clickLocationInfo");
    if (navTabSection3) {
      setTimeout(() => {
        navTabSection3.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const clickFAQ = () => {
    const navTabSection5 = document.getElementById("clickFAQ");
    if (navTabSection5) {
      setTimeout(() => {
        navTabSection5.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // 아이콘과 요소를 매핑하는 객체
  const iconMap = {
    "장작판매": <GiWoodPile />,
    "편의점": <MdOutlineLocalConvenienceStore />,
    "온수": <BsCupHot />,
    "전기": <FaPlugCircleBolt />,
    "무선인터넷": <CiWifiOn />,
    "산책로": <GiTrail />,
    "운동시설": <FaDumbbell />,
    "마트": <IoStorefrontOutline />,
  };

  // camping.sbrsCl의 요소들을 공백, 쉼표, 마침표를 기준으로 분리하여 배열로 만듦
  const facilities = camping.sbrsCl.split(/[ ,.]+/);

  // iconMap에 있는 키 값만 필터링
  const filteredFacilities = facilities.filter(facility => iconMap.hasOwnProperty(facility));


  return (
    <Container fluid style={{ fontFamily: 'SUITE-Regular' }} id="productdetail">
      {/* TopNav */}
      <TopNav bg="dark" theme="dark" />
      {/* 썸네일용 상품 소개 */}
      <div id="entire">
        <div className="firstContainer">
          <div className="Thumbnail">
            {/* 사진 : 왼쪽 + margin px로 할 지, %로 할 지... */}
            {/* 높낮이도 정해야 함 */}
            {/* content firstImageUrl의 값이 있는지 확인 */}
            <img
              src={camping.firstImageUrl ? camping.firstImageUrl : defaultImage}
              alt="캠핑장 사진입니다."
              className="camping-image"
            />
          </div>
          {/* 캠핑장 이름 + 수평선 + addr1, tel, 시설, 기간, 예약하기, 찜하기 : 오른쪽 */}
          <div className="CampIntro">
            <div>
              <h1 className="camping-title">{camping.facltNm}</h1>
            </div>
            <hr />
            <h5 className="camping-address">{camping.addr1}</h5>
            <h6>전화번호 : {camping.tel}</h6>
            <h6>운영기간 : {camping.operPdCl}</h6>
            <h6>운영일 : {camping.operDeCl}</h6>
            <br />
            <br />
            <div className="button-container">
              {camping.homepage ? (
                <button className="camp-button">
                  <a
                    href={camping.homepage.startsWith("http") ? camping.homepage : `https://${camping.homepage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-link"
                  >
                    캠핑장 홈페이지
                  </a>
                </button>
              ) : null}

              {camping.resveUrl ? (
                <button className="camp-button">
                  <a
                    href={camping.resveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-link"
                  >
                    캠핑장 예약하기
                  </a>
                </button>
              ) : null}

              {!camping.homepage && !camping.resveUrl && (
                <button className="no-info-button">
                  예약 정보가 없습니다
                </button>
              )}
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* 상품 상세 설명 : 이거 버튼 탭 클릭할 때 border-radius가 생김...이거 radius 없었으면 좋겠음  - 안없어짐,,, 차라리 클릭하면
            흰색으로 탭이 칠해지면 어떤지??*/}
        <div className="ProductDetail" id="clickCampingIntro">
          {/* Nav bars and tabs : https://react-bootstrap.netlify.app/docs/components/navs */}
          <Nav
            justify
            variant="tabs"
            className="justify-content-center navBar"
          >
            <Nav.Item>
              <Nav.Link className="nav-link" onClick={clickCampingIntro}>
                캠핑장 소개
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" onClick={clickUseInfo}>
                이용안내
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" onClick={clickLocationInfo}>
                위치정보
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" onClick={clickFAQ}>
                FAQ
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* 캠핑장 사진 : 캐러셀 */}
          {/* 아...이거 근데 캠핑장 썸네일 사진만 있으면 이거 못함... */}
          <div className="slider-container carousel">
            <Carousel fade>
              <Carousel.Item interval={1000}>
                <img src={item1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src={item2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src={item3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          {/* h3 : 캠핑장 기본 정보 + 수평선 태그, hr은 inline 태그여서 div나 span 태그랑 감싸서 진행해야 한다.*/}
          <div className="hr1">
            <hr style={{ width: "100%", border: "none", borderBottom: "1px solid black" }} />
          </div>
          <div className="camp-intro-title-container">
            <FaBullhorn className="camp-intro-title-icon" />
            <h4 className="camp-intro-title-text">캠핑장 소개</h4>
          </div>
          <br />

          {/* 캠핑장 관련 짧은 소개글 + 특징 안내 */}
          <div className="short-info-payment-container">
            <div className="short-info-content">
              <br />
              <h6 className="camping-short-info">
                {camping.intro ? camping.intro : "관련 캠핑장 소개가 없습니다."}
                <br />
                <br />
                <br />
                {camping.featureNm}
                <br />
                <br />
              </h6>
              {/* 소개가 null일 때 대체되는 문구 생각하기 */}
            </div>
          </div>
        </div>

        {/* 수평선 태그로 닫아주기 */}
        <div className="hr">
          <hr style={{ width: "100%", border: "none", borderBottom: "1px solid black" }} />
        </div>

        {/* 캠핑장 주요 시설 */}
        <div className="camp-main-facility-header">
          <FaBullhorn className="facility-header-icon" />
          <h4 className="facility-header-text">캠핑장 주요시설</h4>
        </div>
        <br />
        <div className="camp-facility-container" id="clickUseInfo">
          <div className="facility-wrapper">
            <div>
              {filteredFacilities.map((facility, index) => (
                <div className="facility-icon-container" key={index}>
                  <div className="facility-content">
                    {iconMap[facility] && (
                      <div className="facility-icon">
                        {React.cloneElement(iconMap[facility], { size: '3.00rem' })}
                      </div>
                    )}
                    <div className="facility-text">
                      {facility}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* 수평선 */}
        <div className="hr">
          <hr style={{ width: "100%", border: "none", borderBottom: "1px solid black" }} />
        </div>

        {/* table css도 변경하기 */}
        <div className="tableEtc">
          <div className="other-facility-container">
            <FaBullhorn style={{ marginRight: "0.3125rem" }} />
            <h4 className="facility-title">캠핑장 기타시설</h4>
          </div>
          <br />
          <br />
          <div className="backgroundContainer">
            <table className="table">
              <tr>
                <th>관리인원</th>
                <td>{camping.manageNmpr}명</td>
                <th>개인 트레일러 동반여부</th>
                <td>{camping.trlerAcmpnyAt}</td>
              </tr>
              <tr>
                <th>화장실</th>
                <td>{camping.toiletCo}개</td>
                <th>개인 카라반 동반여부</th>
                <td>{camping.caravAcmpnyAt}</td>
              </tr>
              <tr>
                <th>샤워실</th>
                <td>{camping.swrmCo}개</td>
                <th>전체면적</th>
                <td>{camping.allar}</td>
              </tr>
              <tr>
                <th>개수대</th>
                <td>{camping.wtrplCo}개</td>
                <th>입지구분</th>
                <td>{camping.lctCl}</td>
              </tr>
              <tr>
                <th>화로대</th>
                <td>{camping.brazierCl ? camping.brazierCl : "N"}</td>
                <th>사이트간 거리</th>
                <td>{camping.sitedStnc}</td>
              </tr>
              <tr>
                {/* camping.firstImageUrl ? camping.firstImageUrl : defaultImage */}
                <th>장비대여</th>
                <td>{camping.eqpmnLendCl ? camping.eqpmnLendCl : "N"}</td>
                <th>반려동물 동반여부</th>
                <td>{camping.animalCmgCl ? camping.animalCmgCl : "불가능"}</td>
              </tr>
            </table>
          </div>

          <div className="hr">
            <hr style={{ width: "100%", border: "none", borderBottom: "1px solid black" }} />
          </div>

          {/* 캠핑장의 위치 : 지도 api + css는 KakaoMap 컴포넌트 안에서 실행하기 */}
          <div className="mapContainer" id="clickLocationInfo">
            <div className="mapHeader">
              <FaCrosshairs className="mapHeaderIcon" />
              <h4 className="mapHeaderText">캠핑장 위치</h4>
              <br />
            </div>
            <br />
            <KakaoMap className="kakaoMap" camping={camping} key={camping.contentId} />
            <br />
            <p>{camping.facltNm} 오시는길</p>
            <p>{camping.direction ? camping.direction : "등록되지 않은 정보입니다."}</p>
          </div>
        </div>

        <div className="hr">
          <hr style={{ width: "100%", border: "none", borderBottom: "1px solid black" }} />
        </div>
        {/* 공지사항 : 아코디언 */}
        <div id="clickFAQ">
          <div className="FAQ" style={{ display: "flex", alignItems: "center" }}>
            <FaQuestion style={{ marginRight: "0.3125rem" }} />
            <h4 style={{ margin: "0" }}>자주 묻는 질문</h4>
            <br />
          </div>
          <br />

          <Accordion defaultActiveKey={["0"]} alwaysOpen style={{ width: "80%", margin: "0 auto" }}>
            <Accordion.Item eventKey="0" style={{ backgroundColor: "#f2f2f2" }} className="accordion">
              <Accordion.Header>[조회방법] 여러 캠핑장을 검색하는 방법</Accordion.Header>
              <Accordion.Body>
                저희 CAMTEM에서는 메인 페이지의 검색창에서 13개의 지역별 캠핑장을 조회하실 수 있습니다.
                <br />
                1. 지역, 날짜, 인원 수 검색창에 원하시는 지역을 선택하시면 해당 지역의 캠핑장이 리스트로 조회됩니다.
                <br />
                2. 출력된 리스트의 캠핑장들의 상세 내용을 보기 원하신다면 자세히 보기 버튼을 눌러 확인하시면 됩니다.
                <br />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="accordion">
              <Accordion.Header>[반려견 여부] 반려견 동반 캠핑장 관련 자주하는 질문과 답변 안내</Accordion.Header>
              <Accordion.Body>
                CAMTEM에서는 반려견과 함께 캠핑장을 이용하고 싶으신 고객님들을 위해 반려견 동반 가능 여부를 체크해 상세
                페이지에 표시해드리고 있으니 확인 후 많은 이용 부탁드립니다.
                <br />
                또한, 저희 CAMTEM은 캠핑장 추천 사이트이므로 더 정확한 정보를 원하신다면 각 캠핑장의 사이트에서
                확인해주시길 바랍니다.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="accordion">
              <Accordion.Header>[입실 방법] 가족 구성원 대신 입실에 관하여</Accordion.Header>
              <Accordion.Body>
                대부분의 캠핑장에서는 직계존비속· 배우자· 형제자매 및 배우자의 부모인 경우 가족관계증명서 증빙시
                이용가능합니다.
                <br />
                다만 더 정확한 정보를 위해서 이용하시려는 캠핑장의 사이트에서 확인해주시길 바랍니다.
                <br />
                ※ 양도서류
                <br />
                <br />
                1. 예약자의 배우자 · 부모 · 자녀 : 예약자 기준 가족관계증명서(최근 3개월 이내 발급본), 실사용자의 신분증
                <br />
                2. 예약자의 형제 · 자매 : 예약자 부모 기준 가족관계증명서(최근 3개월 이내 발급본), 실사용자의 신분증
                <br />
                3. 예약자의 배우자의 부모 : 예약자의 가족관계증명서(최근 3개월 이내 발급본), 예약자 배우자의 부모님 명의
                가족관계 증명서(최근 3개월 이내 발급본), 실사용자 신분증
                <br />
                <br />
                ※캠핑장마다 정책이 다르니 반드시 확인하시기 바랍니다.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="accordion">
              <Accordion.Header>[사이트 안내] 사이트 관련 안내</Accordion.Header>
              <Accordion.Body>
                저희 CAMTEM은 캠핑장 추천 사이트로 예약 및 결제를 지원하지 않습니다.
                <br />
                예약이나 결제를 원하신다면 각 캠핑장의 사이트로 넘어가서 예약/결제 진행을 부탁드립니다.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="accordion">
              <Accordion.Header>[정보제공] 캠핑장 정보 제공 관련 안내</Accordion.Header>
              <Accordion.Body>
                저희 캠핑장 추천 사이트 CAMTEM에서 제공하는 캠핑장 정보는 한국관광공사 고캠핑에서 제공하는 정보입니다.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          <br />
          <br />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </Container>
  );
}

export default ProductDetail;