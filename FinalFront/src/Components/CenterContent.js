import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import Reservation from "../Components/Reservation";
import "../css/CenterContent.css";

function CenterContent() {
  const [kk, setKk] = useState(null);
  useEffect(() => {
    //kk가 업데이트되면 이 코드가 실행
  }, [kk]);

  return (
    <Container fluid className="bgContainer mt-5 p-3" >
      <Form>
        <h5 className="subTitle text-start ps-3">
          여행지 검색하기
        </h5>
        <Reservation />
      </Form>
    </Container>
  );
}
export default CenterContent;