import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import defaultImage from '../images/image44.png';
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function CampCards(props) {
  const [kk, setKk] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (props.location) {
          const response = await axios.get(
            "http://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=hbDw%2FtMHLuDxj0DparGpJaydrLr0Qx%2FKrwNhE0wlidNKKDLX0y8Tg%2BsyTPyrhvrRZXCGhyWuLQpneGP%2B5ko%2BBw%3D%3D&MobileOS=ETC&MobileApp=AppTest&mapX=127.3845475&mapY=36.3504119&radius=500000&numOfRows=500&_type=json"
          );
          console.log("Received data:", response.data);

          setKk(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  }, [props.location]);

  console.log(props.location);
  return (
    <Container className="cardParent">
      <Row>
      {/* <Row className="campingzang"
        style={{ color: "#fff", display: "grid", width: "85%", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}> */}
      {kk && kk.response.body.items.item
        ? Object.values(kk.response.body.items.item)
        .filter((item) => item.addr1 && item.addr1.includes(props.location) && item.firstImageUrl !== null)
        .slice(0,3)
        .map((item, index) => (
              <Col key={index} xs={12} md={4}>
                <Card style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Card.Img
                    variant="top" 
                    src={item.firstImageUrl ? item.firstImageUrl : defaultImage } 
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body  style={{ flex: "1 0 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Card.Title style={{ fontSize: '20px'}}>{item.facltNm}</Card.Title>
                    {/* <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>{item.facltNm}</Card.Title> */}
                  </Card.Body>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
}

export default CampCards;

// import React, { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";
// import defaultImage from '../images/image44.png';
// import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios";

// function CampCards(props) {
//   const [kk, setKk] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=kpznyRO%2Bj%2BQrqgHf88dGEFWQ27h0A6d%2FfoqRDlYX2hveqpGN%2F9y6xda7hcdmJCJip6UoIdI3Pm7EEXiiArHyDg%3D%3D&MobileOS=ETC&MobileApp=AppTest&mapX=127.3845475&mapY=36.3504119&radius=500000&numOfRows=500&_type=json"
//         );
//         console.log("Received data:", response.data);

//         setKk(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();

//   }, [props.location]);

//   console.log(props.location);
//   return (
//     <Container className="cardParent">
//       <Row>
//         {kk && kk.response.body.items.item
//           ? Object.values(kk.response.body.items.item)
//             .filter((item) => item.addr1 && item.addr1.includes(props.location) && item.firstImageUrl !== null)
//             .slice(0, 3)
//             .map((item, index) => (
//               <Col key={index} xs={12} md={4}>
//                 <Card>
//                   <Card.Img
//                     variant="top"
//                     src={item.firstImageUrl ? item.firstImageUrl : defaultImage}
//                     style={{ width: "100%", height: "auto" }}
//                   />
//                   <Card.Body>
//                     <Card.Title>{item.facltNm}</Card.Title>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))
//           : null}
//       </Row>
//     </Container>
//   );
// }

// export default CampCards;

// import React, { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";
// import defaultImage from '../images/image44.png';
// import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios";

// function CampCards(props) {
//   const [kk, setKk] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=kpznyRO%2Bj%2BQrqgHf88dGEFWQ27h0A6d%2FfoqRDlYX2hveqpGN%2F9y6xda7hcdmJCJip6UoIdI3Pm7EEXiiArHyDg%3D%3D&MobileOS=ETC&MobileApp=AppTest&mapX=127.3845475&mapY=36.3504119&radius=500000&numOfRows=500&_type=json"
//         );
//         console.log("Received data:", response.data);

//         setKk(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();

//   }, [props.location]);

//   console.log(props.location);
//   return (
//     <Container className="cardParent">
//       <div className="card1" style={{ float: "left", width: "200px", height: "75px" }}>
//         {kk && kk.response.body.items.item
//           ? Object.values(kk.response.body.items.item)
//           .filter((item) => item.addr1 && item.addr1.includes(props.location) && item.firstImageUrl !== null)
//           .slice(0,3)
//           .map((item, index) => (
//                 <Card key={index}>
//                   <Card.Img
//                     variant="top"
//                     src={item.firstImageUrl ? item.firstImageUrl : defaultImage}
//                     style={{ width: "95%", height: "75px", margin: "5px", float: "left" }}
//                   />
//                   <Card.Body>
//                     <Card.Title>{item.facltNm}</Card.Title>
//                   </Card.Body>
//                 </Card>
//               ))
//         :null}
//       </div>
//     </Container>
//   );
// }

// export default CampCards;
