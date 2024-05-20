import React from "react";
import NaverLogin from "../Components/NaverLogin";
import KakaoLogin from "../Components/KakaoLogin";
import GoogleLogin from "../Components/GoogleLogin";
import TopNav from "../Components/TopNav";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

function LoginPage() {
  const navigate = useNavigate();

  const handleKakaoLogin = (event) => {
    event.preventDefault(); // 기본 동작(폼 제출) 막기
    const KakaoLoginUrl =
      "https://kauth.kakao.com/oauth/authorize?client_id=62342a0268dc6bfdf0a67b0d5b7c6cb7&redirect_uri=http://localhost:3000/oauth2/kakao&response_type=code&prompt=login";
    window.location.href = KakaoLoginUrl;
  };

  // 인라인 스타일 객체
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 80px)", // Adjust height to provide some space at the bottom
    marginTop: "-80px", // Add margin to push the form slightly upwards
    backgroundColor: "#222529",
    color: "white",
  };

  const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)", // Apply transparency with rgba
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    width: "100%",
    maxWidth: "400px",
  };

  const formStyle = {
    width: "100%",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "none",
    borderRadius: "5px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "darkcyan",
    color: "white",
    cursor: "pointer",
    boxSizing: "border-box",
  };

  const socialButtonStyle = {
    flex: "1", // Distribute the space equally
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
    boxSizing: "border-box",
    margin: "0 5px", // Add some margin between buttons
  };

  const googleButtonStyle = {
    ...socialButtonStyle,
    backgroundColor: "#fff", // Google red
    color: "#000", // Google red
  };

  const naverButtonStyle = {
    ...socialButtonStyle,
    backgroundColor: "#03c75a", // Naver green
  };

  const kakaoButtonStyle = {
    ...socialButtonStyle,
    backgroundColor: "#fee500", // Kakao yellow
    color: "#3c1e1e", // Kakao text color
  };

  return (
    <div>
      <TopNav bg="dark" theme="dark" />
      <div style={containerStyle}>
        <div style={formContainerStyle}>
          <form action="/login" method="post" style={formStyle}>
            <h4 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}>로그인</h4>
            <input name="username" placeholder="아이디" style={inputStyle} />
            <input name="password" type="password" placeholder="비밀번호" style={inputStyle} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                fontSize: "13px",
                color: "lightgray",
              }}
            >
              <Nav.Link
                onClick={() => navigate("/FindMemberInfoPage")}
                style={{ color: "lightgray", textDecoration: "none" }}
              >
                아이디/비밀번호 찾기
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/RegisterPage")}
                style={{ color: "lightgray", textDecoration: "none" }}
              >
                회원가입
              </Nav.Link>
            </div>
            <button type="submit" style={buttonStyle}>
              로그인
            </button>
            <hr style={{ width: "80%", margin: "10px auto" }} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", width: "100%" }}>
              <button type="button" style={googleButtonStyle} onClick={GoogleLogin}>
                Google
              </button>
              <button type="button" style={naverButtonStyle} onClick={NaverLogin}>
                네이버
              </button>
              <button type="button" style={kakaoButtonStyle} onClick={handleKakaoLogin}>
                카카오
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
