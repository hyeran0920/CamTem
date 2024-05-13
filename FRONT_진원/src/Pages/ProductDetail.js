import React from "react";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import { Container, Image, Nav } from "react-bootstrap";
import item1 from "../images/item1.jpg";
import image44 from "../images/image44.png";
import image45 from "../images/image45.png";
import Slider from "react-slick";

function ProductDetail(){
    // 캐러셀 설정 변수
    const settings ={
        dots:true,
        fade:true,
        infinite:true,
        speed: 50,
        slidesToShow:1,
        slidesToScroll:1,
        waitForAnimate : false
    };

    return(
        <Container fluid style={{ margin: 0, padding: 0 }}>
            {/* TopNav */}
            <TopNav bg="dark" theme="dark" />
            {/* 썸네일용 상품 소개 */}
            <div className="ThumbNail">
            {/* 사진 : 왼쪽 */}
            <Image src={item1} alt="캠핑장 사진입니다." style={{width:"400px"}} />
            </div>
            {/* 캠핑장 이름 + 수평선 + addr1, tel, 시설, 기간, 예약하기, 찜하기 : 오른쪽 */}
            <div className="CampIntro">
                <h2>캠핑장 이름</h2>
                <hr/>
                <h5>캠핑장 주소</h5>
                <h5>캠핑장 문의처</h5>
                <h5>캠핑장 이용 가능한 날</h5>
                <button>예약하기</button>
                <button>찜하기</button>
            </div>
            {/* 상품 상세 설명 */}
            <div className="ProductDetail">
                {/* Nav bars and tabs : https://react-bootstrap.netlify.app/docs/components/navs */}
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link>캠핑장 소개</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>이용안내</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>위치정보</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>캠핑 후기</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>FAQ</Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* 캠핑장 사진 : 캐러셀 */}
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            
                        </div>
                    </Slider>
                </div>
                {/* h3 : 캠핑장 기본 정보 + 수평선 태그*/}
                {/* 캠핑장 관련 짧은 소개글 + 요금 안내 */}
                {/* 수평선 태그로 닫아주기 */}
            </div>
            {/* 캠핑장 주요 시설 */}
            <div>
                {/* 캠핑장 주요 시설 */}
                {/* 캠핑장 기타 시설 */}
            </div>
            {/* 캠핑장의 위치 : 지도 api */}
            <div>

            </div>
            {/* 공지사항 : 아코디언 */}
            <div>

            </div>
            {/* Footer */}
            <Footer />
        </Container>
    );
};

export default ProductDetail;