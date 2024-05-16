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
        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        {/* 중앙에 Navbar 브랜드 */}
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo1} alt="Logo" style={{ width: "100px"}} />
        </Navbar.Brand>
        {/* 오른쪽 끝에 Nav */}  {/*오른쪽 왼쪽 글자 길이가 안맞으면 브랜드 중앙정렬이 안됨 주의하세요 - 고정값을 주어야 하는지 고민*/}
        <Nav className="ms-auto">
          <Nav.Link onClick={() => navigate("/productlist")}>상품목록</Nav.Link>
          
          {/* 로그인 화면 버튼 */}
          <Nav className="login">
          <Nav.Link onClick={() => navigate("/LoginPage")}>로그인</Nav.Link>
        </Nav>
        {/* 회원가입 화면 버튼*/}
        <Nav className="register">
          <Nav.Link onClick={() => navigate("/RegisterPage")}>회원가입</Nav.Link>
        </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default TopNav;
