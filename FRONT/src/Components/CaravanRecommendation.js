import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

function CaravanRecommendation({ campingData, onNavigate }) {
    campingData.forEach(camping => console.log("캠핑데이터:", camping));

    console.log("캠핑데이터 잘 받아오냐" + campingData);

    return (

        <div style={{ textAlign: 'center', margin: '20px' }}>
            {campingData.length > 0 ? (
                <div>
                    <h4>오늘 같은 날씨에는 카라반을 추천합니다!</h4>
                    <p>비 오는 날이나 흐린 날에는 카라반에서 편안하게 캠핑을 즐겨보세요.</p>
                    <Row className="justify-content-center">
                        {campingData.map((camping, index) => (
                            <Col key={index} md={4}>
                                <Card style={{ margin: '10px' }}>
                                    <Card.Img variant="top" src={camping.firstImageUrl} alt="캠핑장 사진입니다." />
                                    <Card.Body>
                                        <Card.Title>{camping.facltNm}</Card.Title>
                                        <Button variant="primary" onClick={() => onNavigate(camping)}>
                                            자세히 보기
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            ) : (
                <p>데이터가 없습니다.</p>
            )}
        </div>

    );
}

export default CaravanRecommendation;

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
