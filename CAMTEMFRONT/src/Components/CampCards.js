import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import defaultImage from '../images/image44.png';
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

// Fisher-Yates 알고리즘을 사용하여 배열 섞기
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function CampCards(props) {
  const [kk, setKk] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (props.location) {
          const response = await axios.get(
            "http://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=hbDw%2FtMHLuDxj0DparGpJaydrLr0Qx%2FKrwNhE0wlidNKKDLX0y8Tg%2BsyTPyrhvrRZXCGhyWuLQpneGP%2B5ko%2BBw%3D%3D&MobileOS=ETC&MobileApp=AppTest&mapX=127.3845475&mapY=36.3504119&radius=500000&numOfRows=500&_type=json"
          );
          
          setKk(response.data);
          console.log(response.data)
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.location]);

  let itemsToDisplay = [];

  if (kk && kk.response.body.items.item) {
    // 필터링된 아이템을 가져옴
    let filteredItems = Object.values(kk.response.body.items.item)
      .filter((item) => item.addr1 && item.addr1.includes(props.location) && item.firstImageUrl !== null);
    
    // 아이템을 랜덤으로 섞음
    shuffleArray(filteredItems);
    
    // 원하는 수의 랜덤 아이템 선택
    itemsToDisplay = filteredItems.slice(0, 3);
  }

  return (
    <Container className="cardParent">
      <Row>
        {itemsToDisplay.map((item, index) => (
          <Col key={index} xs={12} md={4}>
            <Card
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "none",  // 테두리 제거
                boxShadow: "none" // 그림자 제거
              }}
            >
              <Card.Img
                variant="top"
                src={item.firstImageUrl ? item.firstImageUrl : defaultImage}
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <Card.Body
                style={{
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Card.Title style={{ fontSize: '18px' }}>{item.facltNm}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CampCards;
