import { Nav, Navbar, Container } from "react-bootstrap";
import logo1 from "../images/logo1.png";
import { useNavigate } from "react-router-dom";

function TopNav(props) {
  let navigate = useNavigate();
  return (
    //data-bs-theme="dark"이거지우면 글씨색이 하얀색됨
    <Navbar bg={props.bg} data-bs-theme={props.theme} expand="lg" style={{ width: "100%" }}>
      <Container>
        {/* 왼쪽 끝에 Nav */}
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        {/* 중앙에 Navbar 브랜드 */}
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo1} alt="Logo" style={{ width: "100px" }} />
        </Navbar.Brand>
        {/* 오른쪽 끝에 Nav */}
        <Nav className="ms-auto">
          <Nav.Link onClick={() => navigate("/productlist")}>캠핑장 리스트</Nav.Link>
        </Nav>
        

        {/* 내가 작성한 부분 ///////////////////////////////////////////////////////////*/}
        {/* 캠핑장 상세페이지 화면 버튼, 임시로 버튼으로 이동하게 만들어둔것*/}
        <Nav className="detail">
          <Nav.Link onClick={() => navigate("/ProductDetail")}>캠핑장 상세페이지</Nav.Link>
        </Nav>
        {/* 로그인 화면 버튼 */}
        <Nav className="login">
          <Nav.Link onClick={() => navigate("/LoginPage")}>로그인</Nav.Link>
        </Nav>
        {/* 회원가입 화면 버튼*/}
        <Nav className="register">
          <Nav.Link onClick={() => navigate("/RegisterPage")}>회원가입</Nav.Link>
        </Nav>
        {/* //////////////////////////////////////////////////////////////////////////// */}


      </Container>
    </Navbar>
  );
}
export default TopNav;
