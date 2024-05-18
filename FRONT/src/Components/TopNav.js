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
            <Nav.Link onClick={() => navigate("/productlist")}>List</Nav.Link>
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

// import { useState } from "react";
// import { Nav, Navbar, Container } from "react-bootstrap";
// import logo1 from "../images/logo1.png";
// import { useNavigate } from "react-router-dom";
// import "../css/mobile.css";

// function TopNav(props) {
//   let navigate = useNavigate();
//   const [menuActive, setMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//   };

//   return (
//     <Navbar className="navbar" bg={props.bg} data-bs-theme={props.theme} expand="lg" style={{ width: "100%" }}>
//       <Container>
//         <Navbar.Brand onClick={() => { navigate("/"); }}>
//           <div className="navbar__logo">
//             <img src={logo1} alt="Logo" style={{ width: "100px" }} />
//           </div>
//         </Navbar.Brand>

//         <a href="#" className="navbar__toggleBtn" onClick={toggleMenu}>
//           <i className="fa-solid fa-bars"></i>
//         </a>

//         <Nav className={`navbar__menu ms-auto ${menuActive ? "active" : ""}`}>
//             <Nav.Link onClick={() => navigate("/productlist")}>List</Nav.Link>
          
//           <Nav className="login">
//             <Nav.Link onClick={() => navigate("/LoginPage")}>로그인</Nav.Link>
//           </Nav>
          
//           <Nav className="register">
//             <Nav.Link onClick={() => navigate("/RegisterPage")}>회원가입</Nav.Link>
//           </Nav>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default TopNav;

// import { Nav, Navbar, Container } from "react-bootstrap";
// import logo1 from "../images/logo1.png";
// import { useNavigate } from "react-router-dom";
// import "../css/mobile.css";
// function TopNav(props) {
//   let navigate = useNavigate();

//   const toggleBtn = document.querySelector(".navbar__toggleBtn");
//   const menu = document.querySelector(".navbar__menu");

//   toggleBtn.addEventListener('click',()=>{
//     menu.classList.toggle('active');
//   });

//   const [menuActive, setMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//   };

//   return (
//     //data-bs-theme="dark"이거지우면 글씨색이 하얀색됨
//     <Navbar className="navbar" bg={props.bg} data-bs-theme={props.theme} expand="lg" style={{ width: "100%" }}>
//       <Container>

//         {/* 왼쪽 끝에 Nav */}
//         {/* <Nav className="me-auto">
//           <Nav.Link onClick={() => navigate("/MainPage")}>Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//         </Nav> */}

//         {/* 중앙에 Navbar 브랜드 */}
//         <Navbar.Brand onClick={() => { navigate("/"); }}>
//           <div className="navbar__logo">
//             <img src={logo1} alt="Logo" style={{ width: "100px" }} />
//           </div>
//         </Navbar.Brand>

//         {/* 반응형 토글 btn */}
//         <a href="#" className="navbar__toggleBtn">
//           <i class="fa-solid fa-bars"></i>
//         </a>

//         {/* 오른쪽 끝에 Nav */}  {/*오른쪽 왼쪽 글자 길이가 안맞으면 브랜드 중앙정렬이 안됨 주의하세요 - 고정값을 주어야 하는지 고민*/}
//         {/* 메뉴 리스트 */}
//         <Nav className="navbar__menu ms-auto">
//           {/* 캠핑장 전체보기 */}
//           <Nav.Link onClick={() => navigate("/productlist")}>List</Nav.Link>

//           {/* 로그인 화면 버튼 */}
//           <Nav className="login">
//             <Nav.Link onClick={() => navigate("/LoginPage")}>로그인</Nav.Link>
//           </Nav>
//           {/* 회원가입 화면 버튼*/}
//           <Nav className="register">
//           </Nav>
//           <Nav.Link onClick={() => navigate("/RegisterPage")}>회원가입</Nav.Link>
//         </Nav>

//       </Container>
//     </Navbar>
//   );
// }
// export default TopNav;
