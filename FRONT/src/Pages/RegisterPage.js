import React, { useState } from 'react';
import TopNav from '../Components/TopNav';

function RegisterPage() {
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, displayName }),
      });
      if (response.ok) {
        // 회원가입 성공 후 처리
        // 예: 로그인 페이지로 이동
        window.location.href = '/LoginPage';
      } else {
        // 회원가입 실패 시 처리
        console.error('회원가입 실패');
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (
    <div>
      <TopNav bg="dark" theme="dark" />
      <div className="registerform">
        
        <h4>회원가입</h4>

        <form action="/member" method="post">
            <input name="displayName" placeholder="닉네임"></input>
            <input name="username" placeholder="아이디"></input>
            <input name="password" type="password" placeholder="비밀번호"></input>
            <button type="submit">회원가입</button>
        </form>

      </div>
    </div>
  );
}

export default RegisterPage;
