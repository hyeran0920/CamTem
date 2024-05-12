import NaverLogin from "../Components/NaverLogin";
import KakaoLogin from "../Components/KakaoLogin";
import GoogleLogin from "../Components/GoogleLogin";
import TopNav from "../Components/TopNav";
import "../css/LoginPage.css";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const navigate=useNavigate();
  return (
    <div>
      <TopNav bg="dark" theme="dark" />
          <form action="/login" method="post" className="loginForm">

            <h4>로그인</h4>

            <div className="Group1">

              <div className="Group2">
                <input name="username" placeholder="아이디"></input>
                <input name="password" type="password" placeholder="비밀번호"></input>
              </div>

              <div className="Group3">
                <button type="submit">로그인</button>
              </div>
              
            </div>

            <div className="Group4">
              <Nav className="findMemberInfo">
                <Nav.Link onClick={() => navigate("/FindMemberInfoPage")}>아이디/비밀번호 찾기</Nav.Link>
              </Nav> 
              <Nav className="register">
                <Nav.Link onClick={() => navigate("/RegisterPage")}>회원가입</Nav.Link>
              </Nav>
            </div>

            <div className="Group5">
              <button className="naverButton" onClick={NaverLogin}></button>
              <button className="kakaoButton" onClick={KakaoLogin}></button>
              <button className="googleButton" onClick={GoogleLogin}></button>
            </div>

          </form>

      </div>
  );
}

export default LoginPage;
