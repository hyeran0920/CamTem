import React, { useEffect, useState } from "react";
//캐러셀 import
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import defaultImage from "../images/image44.png";
import { useLocation, useNavigate } from 'react-router-dom';


function CampingArea(props) {
  const [responseData, setResponseData] = useState("서울");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/camping?city=${props.location}`);
        setResponseData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.location]);

  console.log("response", responseData);

  // 커스텀 이전 화살표 컴포넌트
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <CustomArrow className={className} onClick={onClick} style={{ left: '-20px' }}>
        <span>{`<`}</span>
      </CustomArrow>
    );
  }

  // 커스텀 다음 화살표 컴포넌트
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <CustomArrow className={className} onClick={onClick} style={{ right: '-20px' }}>
        <span>{`>`}</span>
      </CustomArrow>
    );
  }

  // 커스텀 화살표 스타일링
  const CustomArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 40%;
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

  // 캐러셀 설정
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />, // 이전 화살표 커스텀 컴포넌트 사용
    nextArrow: <NextArrow />, // 다음 화살표 커스텀 컴포넌트 사용
    responsive: [ // 반응형 설정
      {
        breakpoint: 768, // 768px 이하의 화면에서 적용
        settings: {
          slidesToShow: 1, // 한 번에 1개의 슬라이드만 보여줌
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <section className="carouselContainer" style={{ display: "flex", justifyContent: "center", marginLeft: "30px" }}>
      <Container className="carousel">
        <StyledSlider {...settings}>
          {responseData && responseData.length > 0 ? (
            Object.keys(responseData).map((key, index) => {
              const item = responseData[key];
              if (item.addr1 && item.addr1.includes(props.location) && item.firstImageUrl !== null) {
                return (
                  <div
                    className="carouselItem"
                    key={index}
                    onClick={() => navigate(`/ProductDetail/${item.contentId}`, { state: { camping: item } })}
                  >
                    <div className="carouselImg">
                      <img
                        src={item.firstImageUrl ? item.firstImageUrl : defaultImage}
                        style={{ height: '300px', objectFit: 'cover' }}
                        alt="캠핑장 이미지"
                      />
                    </div>
                    <div className="cardText" style={{ padding: "10px" }}>
                      <p className="facltName" style={{ fontSize: "20px", fontWeight: "bold" }}>{item.facltNm}</p>
                      <p className="address" style={{ fontSize: "13px" }}>{item.addr1}</p>
                    </div>
                  </div>
                );
              } else {
                return null; // 조건에 맞지 않는 경우 아이템을 반환하지 않음
              }
            })
          ) : (
            <p>No data available</p>
          )}
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
      width: 100%;
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
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    .slick-slide {
      padding: 0;
    }

    .slick-slider .slick-list {
      padding: 0 !important;
    }

    .slick-slider .slick-track {
      margin: 0 auto;
    }
  }
  
  `

export default CampingArea;