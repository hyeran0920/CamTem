import { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo1 from "../images/logo1.png";
import { useNavigate } from "react-router-dom";
import "../css/TopNav.css";

function TopNav(props) {
  let navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <Navbar className="navbar" bg={props.bg} data-bs-theme={props.theme} expand="lg" style={{ width: "100%" }}>
      <Container>
        <Navbar.Brand onClick={() => { navigate("/"); }}>
          <div className="navbar__logo">
            <img src={logo1} alt="Logo" style={{ width: "100px" }} />
          </div>
        </Navbar.Brand>

        <a href="#" className="navbar__toggleBtn" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </a>

        <Nav className={`navbar__menu ms-auto ${menuActive ? "active" : ""}`}>
          <Nav.Item className="nav-item">
            <Nav.Link onClick={() => navigate("/productlist")}>캠핑장</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link onClick={() => navigate("/LoginPage")}>로그인</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link onClick={() => navigate("/RegisterPage")}>회원가입</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNav;