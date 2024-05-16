import React, { useState } from 'react';
import TopNav from '../Components/TopNav';
import "../css/RegisterPage.css";

function RegisterPage() {
  const [displayName, setDisplayName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div>
      <TopNav bg="dark" theme="dark" />

      <div className="register-container">
        <h4 className="register-title">회원가입</h4>

        <form>
          <div className="registerForm">
            <input
              className="registerInput"
              name="displayName"
              value={displayName}
              placeholder="닉네임"
            />
          </div>
          <div className="registerForm">
            <input
              className="registerInput"
              name="userId"
              value={userId}
              placeholder="아이디"
            />
          </div>
          <div className="registerForm">
            <input
              className="registerInput"
              name="password"
              type="password"
              value={password}
              placeholder="비밀번호"
            />
          </div>
          <button className="btn-register" type="submit">회원가입</button>
        </form>

        <div className="line-with-text">SNS 간편 회원가입</div>

        <div className="snsRegisterButton">
          <button className="RegisterNaverButton"></button>
          <button className="RegisterKakaoButton"></button>
          <button className="RegisterGoogleButton"></button>
        </div>

      </div>
    </div>
  );
}

export default RegisterPage;
