import React from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import defaultImage from "../images/image44.png";
import { useNavigate } from "react-router-dom";

function CaravanRecommendation({ campingData ,onNavigate}) {
    const navigate = useNavigate();


// 커스텀 화살표 스타일링
const CustomArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    span {
        font-size: 30px; // 화살표 크기
        color: #999; // 화살표 색상
    }

    &:hover {
        opacity: 0.5; // 호버 시 불투명도 조절
    }
`;

const StyledSlider = styled(Slider)`
  .carouselItem {
    overflow: hidden;
    border: none;
    width: 100%;
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-slide {
    padding: 0 15px; /* 카드 간 간격을 넓히기 */
  }

  .slick-list {
    margin: 0 auto; /* 가운데 정렬 */
    width: 80%; /* 슬라이더 너비 설정 */

    @media (max-width: 1200px) {
      width: 90%;
    }

    @media (max-width: 768px) {
      width: 95%;
    }

    @media (max-width: 576px) {
      width: 100%;
      padding: 0 5px;
    }
  }

  .slick-slider {
    margin: 0 auto; /* 가운데 정렬 */
  }

  .carouselItem {
    overflow: hidden;
    border: none;
    width: 100%;
    display: flex;
    justify-content: center; /* 카드를 가운데 정렬 */
  }

  .carouselImg {
    border-radius: 0.75rem 0.75rem 0 0;
  }
`;


    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <CustomArrow className={className} onClick={onClick} style={{ left: "-20px" }}>
                <span>{'<'}</span>
            </CustomArrow>
        );
    }

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <CustomArrow className={className} onClick={onClick} style={{ right: "-20px" }}>
                <span>{'>'}</span>
            </CustomArrow>
        );
    }

    // 캐러셀 설정
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: <PrevArrow />, // 이전 화살표 커스텀 컴포넌트 사용
        nextArrow: <NextArrow />, // 다음 화살표 커스텀 컴포넌트 사용
        responsive: [
          {
              breakpoint: 768, // 768px 이하일 때
              settings: {
                  slidesToShow: 1, // 하나의 항목만 표시
                  slidesToScroll: 1
              }
          }
        ]
    };

    
 
    return (
        <div style={{ textAlign: 'center', margin: "20px" }}>
          <Container className="carousel" >
            <h5 style={{ textAlign: "center", marginLeft: "2%", fontWeight: "bold" }}>비가 올 가능성이 있어요! 카라반 여행은 어떠세요?</h5>
            <br />
            {campingData && campingData.length > 0 ? (
  <StyledSlider {...settings}>
    {campingData.map((camping, index) => (
      <div key={index} onClick={() => onNavigate(`/ProductDetail/${camping.contentId}`, { state: { camping }}) }>
        <Card style={{ border: "none", width: "80%", margin: "0 auto" }}>
          <Card.Img variant="top" src={camping.firstImageUrl ? camping.firstImageUrl : defaultImage} style={{ height: "50%", objectFit: "cover", borderRadius: "0" }} alt="캠핑장 사진입니다." />
          <Card.Body>
            <Card.Title style={{ fontSize: "0.85rem", textAlign: "center", fontWeight: "bold" }}>{camping.facltNm}</Card.Title>
            {/* camping.camping.facltNm 대신에 camping.facltNm을 사용합니다. */}
          </Card.Body>
        </Card>
      </div>
    ))}
  </StyledSlider>
) : (
  <p>데이터가 없습니다.</p>
)}


          </Container>
        </div>
      );
    }
    
    export default CaravanRecommendation;