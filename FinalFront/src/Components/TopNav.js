import { useContext, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo1 from "../images/logo1.png";
import { useNavigate } from "react-router-dom";
import "../css/TopNav.css";
import { AuthContext } from "./AuthContext";

function TopNav(props) {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Navbar className="navbar" bg={props.bg} data-bs-theme={props.theme} expand="lg" style={{ width: "100%" }}>
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="navbar__logo">
            <img src={logo1} alt="Logo" style={{ width: "100px" }} />
          </div>
        </Navbar.Brand>

        <a href="#" className="navbar__toggleBtn" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </a>

        <Nav className={`navbar__menu ms-auto ${menuActive ? "active" : ""}`}>
          <Nav.Item className="nav-item">
            <Nav.Link onClick={() => handleNavigation("/productlist")}>캠핑장</Nav.Link>
          </Nav.Item>
          {user ? (
            <>
              <Nav.Item className="nav-item">
                <Nav.Link>{user.name}님</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link onClick={logout}>로그아웃</Nav.Link>
              </Nav.Item>
            </>
          ) : (
            <>
              <Nav.Item className="nav-item">
                <Nav.Link onClick={() => handleNavigation("/LoginPage")}>로그인</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link onClick={() => handleNavigation("/RegisterPage")}>회원가입</Nav.Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNav;
