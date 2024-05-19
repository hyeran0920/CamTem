import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import defaultImage from "../images/image44.png";
import { useNavigate } from 'react-router-dom';

function CampingArea(props) {
  const [responseData, setResponseData] = useState([]);
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

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <CustomArrow className={className} onClick={onClick} style={{ left: '-20px' }}>
            <span>{`<`}</span>
        </CustomArrow>
    );
  }

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <CustomArrow className={className} onClick={onClick} style={{ right: '-20px' }}>
            <span>{`>`}</span>
        </CustomArrow>
    );
  }

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
        font-size: 30px;
        color: #999;
    }

    &:hover {
        opacity: 0.5;
    }
  `;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768, // 모바일 크기 기준
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="carouselContainer" style={{ display: "flex", justifyContent: "center", marginLeft: "30px"}}>
      <StyledContainer fluid>
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
                return null;
              }
            })
          ) : (
            <p>No data available</p>
          )}
        </StyledSlider>
      </StyledContainer>
    </section>
  );
}

const StyledSlider = styled(Slider)`
  .carouselItem {
    overflow: hidden;
    border: none;
    width: 100%;
  }
  
  .carouselImg {
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
`;

const StyledContainer = styled(Container)`
  width: 100%;
  overflow: visible;
`;

export default CampingArea;
