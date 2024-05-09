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
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link onClick={() => navigate("/productlist")}>producList페이지</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default TopNav;
