import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import { Accordion, Carousel, Container, Image, Nav } from "react-bootstrap";
import item1 from "../images/item1.jpg";
import item2 from "../images/image45.png";
import item3 from "../images/image44.png";
import KakaoMap from "../Components/KakaoMap";
import { FaBullhorn, FaCrosshairs, FaQuestion } from "react-icons/fa";
import axios from "axios";
import defaultImage from '../images/image44.png';
import { useDispatch, useSelector } from "react-redux";

function ProductDetail() {

    // useParams : api에 요청한 url에 접근해서 100109 id를 가져올 수 있다.
    const {contentId} = useParams();
    const [content, setContent] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                //contentId 있으면 캠핑장 전부 다 띄우기
              if (contentId) {
                const response = await axios.get(
                  "http://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=hbDw%2FtMHLuDxj0DparGpJaydrLr0Qx%2FKrwNhE0wlidNKKDLX0y8Tg%2BsyTPyrhvrRZXCGhyWuLQpneGP%2B5ko%2BBw%3D%3D&MobileOS=ETC&MobileApp=AppTest&mapX=127.3845475&mapY=36.3504119&radius=500000&numOfRows=500&_type=json"
                );
                // 얘는 새고해도 안없어짐
                // response.data.response.body.items.item 캠핑장 리스트에서 itme을 찾음. => 캠핑장 리스트 중 고유한 contentId랑 useParameter로 넘어온 contentid랑 같은거 찾기
                const data = response.data.response.body.items.item.find((item) => item.contentId === contentId);
                setContent(data);
                console.log(data);
              }
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchData();

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

    return (
        <Container fluid style={{ margin: 0, padding: 0 }}>
            {/* TopNav */}
            <TopNav bg="dark" theme="dark" />
            {/* 썸네일용 상품 소개 */}
            <div className="firstContainer" style={{ display: "flex", alignItems: "center" }}>
                <div className="ThumbNail">
                    {/* 사진 : 왼쪽 + margin px로 할 지, %로 할 지... */}
                    {/* 높낮이도 정해야 함 */}
                    {/* content firstImageUrl의 값이 있는지 확인 */}
                    <Image src={content?.firstImageUrl} alt="캠핑장 사진입니다." style={{ width: "600px", margin: "8%" }} />
                </div>
                {/* 캠핑장 이름 + 수평선 + addr1, tel, 시설, 기간, 예약하기, 찜하기 : 오른쪽 */}
                <div className="CampIntro" style={{ marginLeft: "90px" }}>
                    <div>
                        <h2>{content?.facltNm}</h2>
                    </div>
                    <hr />
                    <h5 style={{ marginTop: "30px" }}>{content?.addr1}</h5>
                    <h5>전화번호 : {content?.tel}</h5>
                    <h5>운영기간 : {content?.operPdCl}</h5>
                    <h5>운영일 : {content?.operDeCl}</h5>
                    {/* button css 변경 */}
                    <button style={{ marginRight: "10px" }}>{content?.resveUrl}</button>
                    <button>찜하기</button>
                </div>
            </div>
            <br />
            <br />
            <br />
            {/* 상품 상세 설명 : 이거 버튼 탭 클릭할 때 border-radius가 생김...이거 radius 없었으면 좋겠음 */}
            <div className="ProductDetail" id="clickCampingIntro">
                {/* Nav bars and tabs : https://react-bootstrap.netlify.app/docs/components/navs */}
                <Nav justify variant="tabs" className="justify-content-center navBar" style={{ background: "gray", borderRadius: "0" }}>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} onClick={clickCampingIntro}>캠핑장 소개</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} onClick={clickUseInfo}>이용안내</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} onClick={clickLocationInfo}>위치정보</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} onClick={clickFAQ}>FAQ</Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* 캠핑장 사진 : 캐러셀 */}
                {/* 아...이거 근데 캠핑장 썸네일 사진만 있으면 이거 못함... */}
                <div className="slider-container" style={{ textAlign: "center" }}>
                    <Carousel fade>
                        <Carousel.Item interval={1000}>
                            <Image src={item1} style={{ width: "40%", margin: "3.5%" }} />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <Image src={item2} style={{ width: "40%", margin: "3.5%" }} />
                        </Carousel.Item >
                        <Carousel.Item interval={1000}>
                            <Image src={item3} style={{ width: "40%", margin: "3.5%" }} />
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* h3 : 캠핑장 기본 정보 + 수평선 태그, hr은 inline 태그여서 div나 span 태그랑 감싸서 진행해야 한다.*/}
                <div className="hr" style={{ width: '90%', margin: '0 auto' }}>
                    <hr style={{ width: '100%', border: 'none', borderBottom: '1px solid black' }} />
                </div>
                {/* 캠핑장 관련 짧은 소개글 + 요금 안내 */}
                <div className="shortInfo-payment" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {/* 캠핑장 짧은 */}
                    <h3 className="campingShortInfo">{content?.intro}</h3>
                    <div className="payment" style={{ display: "inline", marginRight: "20px" }}>
                        {/* 테이블로 요금 안내 */}
                        {/* 이 부분은 db 보고 정해야 할 것 같아요 */}
                        {/* css 변경하기 + 고캠핑 doc에 가격 관련 안내 있으면 넣어주기 */}
                        <table className="table" style={{ width: "150%", textAlign: "center" }}>
                            <thead>
                                <tr>
                                    <th>기간</th>
                                    <th>주중</th>
                                    <th>기간</th>
                                    <th>주말</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>전체면적</td>
                                    <td>{content?.allar}</td>
                                    <td>가격2</td>
                                    <td>가격2</td>
                                </tr>
                                <tr>
                                    <td>입지구분</td>
                                    <td>{content?.lctCl}</td>
                                    <td>가격2</td>
                                    <td>가격2</td>
                                </tr>
                                <tr>
                                    <td>사이트간거리</td>
                                    <td>{content?.sitedStnc}</td>
                                    <td>가격2</td>
                                    <td>가격2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* 수평선 태그로 닫아주기 */}
            <div className="hr" style={{ width: '90%', margin: '0 auto' }}>
                <hr style={{ width: '100%', border: 'none', borderBottom: '1px solid black' }} />
            </div>
            {/* 캠핑장 주요 시설 */}
            <FaBullhorn /><p>캠핑장 주요시설</p>
            <div id="clickUseInfo" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ backgroundColor: "#f2f2f2", width: "90%", height: "20vh" }}>
                    {content?.sbrsCl}
                </div>
            </div>
            <div className="hr" style={{ width: '90%', margin: '0 auto' }}>
                <hr style={{ width: '100%', border: 'none', borderBottom: '1px solid black' }} />
            </div>
            {/* table css도 변경하기 */}
            <div className="tableEtc">
                {/* 캠핑장 기타 시설 : 고캠핑 doc 보고 정하기 */}

                {/* 이 부분은 db 보고 정해야 할 것 같아요 */}
                <FaBullhorn /><p>캠핑장 기타시설</p>
                <table className="table">
                    <tr>
                        <th style={{ width: "15%" }}>주요시설</th>
                        <td>가격1</td>
                        <td>가격2</td>
                    </tr>
                    <tr>
                        <th>사이트 간격</th>
                        <td>가격1</td>
                        <td>가격2</td>
                    </tr>
                    <tr>
                        <th>바닥형태</th>
                        <td>가격1</td>
                        <td>가격2</td>
                    </tr>
                    <tr>
                        <th>카라반 내부시설</th>
                        <td>가격1</td>
                        <td>가격2</td>
                    </tr>
                    <tr>
                        <th>카라반 내부시설</th>
                        <td>가격1</td>
                        <td>가격2</td>
                    </tr>
                    <tr>
                        <th>카라반 내부시설</th>
                        <td>가격1</td>
                        <td>가격2</td>
                    </tr>
                    <tr>
                        <th>카라반 내부시설</th>
                        <td>가격1</td>
                        <td>가격2</td>
                    </tr>
                    <tr>
                        <th>카라반 내부시설</th>
                        <td>가격1</td>
                        <td>가격2</td>
                    </tr>
                </table>
            </div>
            <div className="hr" style={{ width: '90%', margin: '0 auto' }}>
                <hr style={{ width: '100%', border: 'none', borderBottom: '1px solid black' }} />
            </div>
            {/* 캠핑장의 위치 : 지도 api + css는 KakaoMap 컴포넌트 안에서 실행하기 */}
            <div className="mapContainer" id="clickLocationInfo">
            <FaCrosshairs /><p>캠핑장 위치</p>
                <KakaoMap />
            </div>
            <div className="hr" style={{ width: '90%', margin: '0 auto' }}>
                <hr style={{ width: '100%', border: 'none', borderBottom: '1px solid black' }} />
            </div>
            {/* 공지사항 : 아코디언 */}
            <div id="clickFAQ">
            <FaQuestion /><p>자주 묻는 질문</p>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>[조회방법] 여러 캠핑장을 검색하는 방법</Accordion.Header>
                        <Accordion.Body>
                            저희 CAMTEM에서는 메인 페이지의 검색창에서 13개의 지역별 캠핑장을 조회하실 수 있습니다.<br />
                            1. 지역, 날짜, 인원 수 검색창에 원하시는 지역을 선택하시면 해당 지역의 캠핑장이 리스트로 조회됩니다.<br />
                            2. 출력된 리스트의 캠핑장들의 상세 내용을 보기 원하신다면 자세히 보기 버튼을 눌러 확인하시면 됩니다.<br />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>[반려견 여부] 반려견 동반 캠핑장 관련 자주하는 질문과 답변 안내</Accordion.Header>
                        <Accordion.Body>
                            CAMTEM에서는 반려견과 함께 캠핑장을 이용하고 싶으신 고객님들을 위해 반려견 동반 가능 여부를 체크해 상세 페이지에 표시해드리고 있으니 확인 후 많은 이용 부탁드립니다.<br />
                            또한, 저희 CAMTEM은 캠핑장 추천 사이트이므로 더 정확한 정보를 원하신다면 각 캠핑장의 사이트에서 확인해주시길 바랍니다.

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>[입실 방법] 가족 구성원 대신 입실에 관하여</Accordion.Header>
                        <Accordion.Body>
                            대부분의 캠핑장에서는 직계존비속· 배우자· 형제자매 및 배우자의 부모인 경우 가족관계증명서 증빙시 이용가능합니다.<br />
                            다만 더 정확한 정보를 위해서 이용하시려는 캠핑장의 사이트에서 확인해주시길 바랍니다.<br />
                            ※ 양도서류<br /><br />


                            1. 예약자의 배우자 · 부모 · 자녀 : 예약자 기준 가족관계증명서(최근 3개월 이내 발급본), 실사용자의 신분증<br />

                            2. 예약자의 형제 · 자매 : 예약자 부모 기준 가족관계증명서(최근 3개월 이내 발급본), 실사용자의 신분증<br />

                            3. 예약자의 배우자의 부모 : 예약자의 가족관계증명서(최근 3개월 이내 발급본), 예약자 배우자의 부모님 명의 가족관계 증명서(최근 3개월 이내 발급본), 실사용자 신분증<br /><br />


                            ※캠핑장마다 정책이 다르니 반드시 확인하시기 바랍니다.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>[사이트 안내] 사이트 관련 안내</Accordion.Header>
                        <Accordion.Body>
                            저희 CAMTEM은 캠핑장 추천 사이트로 예약 및 결제를 지원하지 않습니다.<br />
                            예약이나 결제를 원하신다면 각 캠핑장의 사이트로 넘어가서 예약/결제 진행을 부탁드립니다.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>[정보제공] 캠핑장 정보 제공 관련 안내</Accordion.Header>
                        <Accordion.Body>
                            저희 캠핑장 추천 사이트 CAMTEM에서 제공하는 캠핑장 정보는 한국관광공사 고캠핑에서 제공하는 정보입니다.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            {/* Footer */}
            <Footer />
        </Container>
    );
};

export default ProductDetail;