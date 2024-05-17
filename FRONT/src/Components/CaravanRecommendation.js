import React from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import defaultImage from "../images/image44.png";

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

function CaravanRecommendation({ campingData, onNavigate }) {
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
    };

    return (
        <div style={{ textAlign: "center", margin: "20px", height:"15%"}}>
            <Container className="carousel">
                <h4>오늘 같은 날씨에는 카라반을 추천합니다!</h4>
                <p>비 오는 날이나 흐린 날에는 카라반에서 편안하게 캠핑을 즐겨보세요.</p>
                {campingData.length > 0 ? (
                    <StyledSlider {...settings}>
                        {campingData.map((camping, index) => (
                            <div key={index}>
                                <Card style={{ margin: '10px', border: "none", borderRadius: "0" }}>
                                    <Card.Img variant="top" src={camping.firstImageUrl ? camping.firstImageUrl : defaultImage} style={{width:"50%", objectFit: "cover"}} alt="캠핑장 사진입니다." />
                                    <Card.Body style={{width:"50%"}}>
                                        <Card.Title>{camping.facltNm}</Card.Title>
                                        <Button variant="primary" onClick={() => onNavigate(camping)}>
                                            자세히 보기
                                        </Button>
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

// 이 코드로 작성했을 때 안된 이유
// 1. StyledSlider
//원래 코드에서는 StyledSlider가 CaravanRecommendation 함수 내부에 있었기 때문에 StyledSlider를 함수 내부에서 사용하려고 할 때 참조 오류가 발생
// 2. CustomArrow
// 원래 코드에서는 CustomArrow가 PrevArrow와 NextArrow 함수 내부에서 선언된 후 사용
// 3. StyledSlider가 Slider 컴포넌트를 제대로 감싸고 있지 않았음!
// 원래 코드에서는 StyledSlider가 Slider 컴포넌트를 감싸지 않은 상태로 사용
// 4. 불필요한 Carousel 관련 코드 제거
//원래 코드에서는 react-bootstrap의 Carousel을 잘못 포함하여 Slider와 혼동될 수 있었음!

// import React from 'react';
// import { Card, Row, Col, Button, Carousel, Container } from 'react-bootstrap';
// import Slider from "react-slick";
// import styled from 'styled-components';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import defaultImage from "../images/image44.png";

// function CaravanRecommendation({ campingData, onNavigate }) {
//     // 콘솔 데이터 확인용
//     // campingData.forEach(camping => console.log("캠핑데이터:", camping));
//     // console.log("캠핑데이터 잘 받아오냐" + campingData);

//     function PrevArrow(props) {
//         const { className, onClick } = props;
//         return (
//             <CustomArrow className={className} onClick={onClick} style={{ left: "-20px" }}>
//                 <span>{'<'}</span>
//             </CustomArrow>
//         )
//     }

//     function NextArrow(props) {
//         const { className, onClick } = props;
//         return (
//             <CustomArrow className={className} onClick={onClick} style={{ right: "-20px" }}>
//                 <span>{'>'}</span>
//             </CustomArrow>
//         )
//     }

//     // 커스텀 화살표 스타일링
//     const CustomArrow = styled.div`
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: transparent;
//         border: none;
//         cursor: pointer;
//         position: absolute;
//         top: 40%;
//         transform: translateY(-50%);
//         z-index: 1;

//         span {
//             font-size: 30px; // 화살표 크기
//             color: #999; // 화살표 색상
//         }

//         &:hover {
//             opacity: 0.5; // 호버 시 불투명도 조절
//         }
//         `;

//     // 캐러셀 설정
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         prevArrow: <PrevArrow />, // 이전 화살표 커스텀 컴포넌트 사용
//         nextArrow: <NextArrow />, // 다음 화살표 커스텀 컴포넌트 사용
//     };
//     return (

//         <div style={{ textAlign: 'center', margin: '20px' }}>
//             <Container className="carousel">
//             <StyledSlider {...settings}>
//             {campingData.length > 0 ? (
//                 <div>
//                     <h4>오늘 같은 날씨에는 카라반을 추천합니다!</h4>
//                     <p>비 오는 날이나 흐린 날에는 카라반에서 편안하게 캠핑을 즐겨보세요.</p>
//                     <Row className="justify-content-center">
//                         {campingData.map((camping, index) => (
//                             <Col key={index} md={4}>
//                                 <Card style={{ margin: '10px', border: "none", borderRadius: "0" }}>
//                                     <Card.Img variant="top" src={camping.firstImageUrl ? camping.firstImageUrl : defaultImage} alt="캠핑장 사진입니다." />
//                                     <Card.Body>
//                                         <Card.Title>{camping.facltNm}</Card.Title>
//                                         <Button variant="primary" onClick={() => onNavigate(camping)}>
//                                             자세히 보기
//                                         </Button>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         ))}
//                     </Row>
//                 </div>
//             ) : (
//                 <p>데이터가 없습니다.</p>
//             )}
//             </StyledSlider>
//             </Container>
//         </div>
//     );

// }
// const StyledSlider = styled(Slider)`
  
// .carouselItem {
//   // border-radius:0.75rem;
//   overflow:hidden;
//   // box-shadow: 5px 5px 5px lightGray;
//   border:none;
//   width: 100%;
// }

// .carouselImg{
//   border-radius: 0.75rem 0.75rem 0 0;
// }

// .slick-prev::before,
// .slick-next::before {
//   opacity: 0;
//   display: none;
// }

// .slick-slide {
// padding: 0 20px;
// }

// `

// export default CaravanRecommendation;

        //     <div style={{ textAlign: 'center', margin: '20px' }}>
        //     {campingData.length > 0 ? (
        //         <div>
        //             <h4>오늘 같은 날씨에는 카라반을 추천합니다!</h4>
        //             <p>비 오는 날이나 흐린 날에는 카라반에서 편안하게 캠핑을 즐겨보세요.</p>
        //             <Carousel style={{width:"30%"}}>
        //                 {campingData.map((camping, index) => (
        //                     <Carousel.Item key={index}>
        //                         <Card style={{ margin: '10px', border: 'none', borderRadius: '0' }}>
        //                             <Card.Img
        //                                 variant="top"
        //                                 src={camping.firstImageUrl}
        //                                 alt="캠핑장 사진입니다."
        //                                 style={{ borderRadius: '0' }}
        //                             />
        //                             <Card.Body>
        //                                 <Card.Title>{camping.facltNm}</Card.Title>
        //                                 <Button variant="primary" onClick={() => onNavigate(camping)}>
        //                                     자세히 보기
        //                                 </Button>
        //                             </Card.Body>
        //                         </Card>
        //                     </Carousel.Item>
        //                 ))}
        //             </Carousel>
        //         </div>
        //     ) : (
        //         <p>데이터가 없습니다.</p>
        //     )}
        // </div>
        
// campingData.length > 0 ? (
//   <div style={{ textAlign: 'center', margin: '20px' }}>
//     <h4>오늘 같은 날씨에는 카라반을 추천합니다!</h4>
//     <p>비 오는 날이나 흐린 날에는 카라반에서 편안하게 캠핑을 즐겨보세요.</p>
//     <Row className="justify-content-center">
//       {campingData.map((camping, index) => (
//         <Col key={index} md={4}>
//           <Card style={{ margin: '10px' }}>
//             <Card.Img variant="top" src={camping.imageUrl} alt={camping.name} />
//             <Card.Body>
//               <Card.Title>{camping.name}</Card.Title>
//               <Card.Text>{camping.description}</Card.Text>
//               <Button variant="primary" onClick={() => onNavigate(camping)}>
//                 자세히 보기
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   </div>
// ) : (
//  null
// )

// import React from 'react';
// import { Card, Row, Col, Button } from 'react-bootstrap';

// function CaravanRecommendation({ campingData, onNavigate }) {
//     campingData.forEach(camping => console.log("캠핑데이터:", camping));
//   return (
//     <div style={{ textAlign: 'center', margin: '20px' }}>
//       <h4>오늘 같은 날씨에는 카라반을 추천합니다!</h4>
//       <p>비 오는 날이나 흐린 날에는 카라반에서 편안하게 캠핑을 즐겨보세요.</p>
//       {campingData.length > 0 ? (
//         <Row className="justify-content-center">
//           {campingData.map((camping, index) => (
//             <Col key={index} md={4}>
//               <Card style={{ margin: '10px' }}>
//                 <Card.Img variant="top" src={camping.imageUrl} alt={camping.name} />
//                 <Card.Body>
//                   <Card.Title>{camping.name}</Card.Title>
//                   <Card.Text>{camping.description}</Card.Text>
//                   <Button variant="primary" onClick={() => onNavigate(camping)}>
//                     자세히 보기
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       ) : (
//         <p>추천할 카라반이 없습니다.</p>
//       )}
//     </div>
//   );
// }

// export default CaravanRecommendation;

// import React from 'react';
// import { Card, Row, Col, Button } from 'react-bootstrap';

// function CaravanRecommendation({ campingData, onNavigate }) {
//     campingData.forEach(camping => console.log("캠핑데이터:", camping));
//   return (
//     <div style={{ textAlign: 'center', margin: '20px' }}>
//       <h4>오늘 같은 날씨에는 카라반을 추천합니다!</h4>
//       <p>비 오는 날이나 흐린 날에는 카라반에서 편안하게 캠핑을 즐겨보세요.</p>
//       <Row className="justify-content-center">
//         {campingData.map((camping, index) => (
//           <Col key={index} md={4}>
//             <Card style={{ margin: '10px' }}>
//               <Card.Img variant="top" src={camping.imageUrl} alt={camping.name} />
//               <Card.Body>
//                 <Card.Title>{camping.name}</Card.Title>
//                 <Card.Text>{camping.description}</Card.Text>
//                 <Button variant="primary" onClick={() => onNavigate(camping)}>
//                   자세히 보기
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default CaravanRecommendation;

// import React from 'react';
// import { Card, Row, Col, Button } from 'react-bootstrap';

// function CaravanRecommendation({ campingData, onNavigate }) {
//     console.log(campingData);
//   return (
//     <div style={{ textAlign: 'center', margin: '20px' }}>
//       <h4>오늘 같은 날씨에는 카라반을 추천합니다!</h4>
//       <p>비 오는 날이나 흐린 날에는 카라반에서 편안하게 캠핑을 즐겨보세요.</p>
//       <Row className="justify-content-center">
//         {campingData.map((camping, index) => (
//           <Col key={index} md={4}>
//             <Card style={{ margin: '10px' }}>
//               <Card.Img variant="top" src={camping.imageUrl} alt={camping.name} />
//               <Card.Body>
//                 <Card.Title>{camping.name}</Card.Title>
//                 <Card.Text>{camping.description}</Card.Text>
//                 <Button variant="primary" onClick={() => onNavigate(camping)}>
//                   자세히 보기
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default CaravanRecommendation;
