import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import Reservation from "../Components/Reservation";

function CenterContent() {
  const [kk, setKk] = useState(null);
  useEffect(() => {
    //kk가 업데이트되면 이 코드가 실행
  }, [kk]);

  return (
    <Container
      fluid
      className="mt-5 p-3"
      style={{ width: "70%", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "20px" }}
    >
      <Form>
        <h5 className="text-start ps-3" style={{ marginBottom: "10px", color: "#fff", fontWeight: "bold" }}>
          여행지 검색하기
        </h5>
        <Reservation />
      </Form>
    </Container>
  );
}
export default CenterContent;
