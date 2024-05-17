import React, { useEffect, useState } from "react";
//캐러셀 import
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import { Container } from "react-bootstrap";
import defaultImage from "../images/image44.png";

//CampingArea 캠핑카드 - 캐러셀 구현
function CampingArea(props) {
    const [kk, setKk] = useState(null);
    console.log(props.location);
  
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
};
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=hbDw%2FtMHLuDxj0DparGpJaydrLr0Qx%2FKrwNhE0wlidNKKDLX0y8Tg%2BsyTPyrhvrRZXCGhyWuLQpneGP%2B5ko%2BBw%3D%3D&MobileOS=ETC&MobileApp=AppTest&mapX=127.3845475&mapY=36.3504119&radius=500000&numOfRows=500&_type=json"
          );
          setKk(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();

    }, [props.location]);
  
    return (
      <section className="carouselContainer" style={{ display: "flex", justifyContent: "center", marginLeft: "30px"}}>
        <Container className="carousel">
        <StyledSlider {...settings}>
        {kk && kk.response.body.items.item
        ? Object.values(kk.response.body.items.item)
        .filter((item) => item.addr1 && item.addr1.includes(props.location) && item.firstImageUrl !== null)
          .map((item, index)=>(
            <div className="carouselItem" key={index}>
              <div className="carouselImg">
                <img src={item.firstImageUrl ? item.firstImageUrl : defaultImage } style={{ height:'300px', objectFit: 'cover' }}/>
              </div>
              <div className="cardText" style={{ padding: "10px" }}>
                <p className="facltName" style={{ fontSize: "20px", fontWeight: "bold" }}>{item.facltNm}</p>
                <p className="address" style={{ fontSize: "13px" }}>{item.addr1}</p>
              </div>
              </div>
          )):(
            <p>Lodaing...</p>
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
  
  `

  export default CampingArea;