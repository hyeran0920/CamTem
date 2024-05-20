import React, { useState } from 'react';
import TopNav from '../Components/TopNav';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Footer from '../Components/Footer';

function RegisterPage() {
  const [displayName, setDisplayName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 80px)',
    marginTop: '-80px',
    backgroundColor: '#222529',
    color: 'white',
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '400px',
  };

  const formStyle = {
    width: '100%',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'darkcyan',
    color: 'white',
    cursor: 'pointer',
    boxSizing: 'border-box',
  };


  return (
    <div>
      <TopNav bg="dark" theme="dark" />
      <div style={containerStyle}>
        <div style={formContainerStyle}>
          <h4 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>회원가입</h4>
          <form style={formStyle}>
            <input
              name="displayName"
              value={displayName}
              placeholder="닉네임"
              onChange={(e) => setDisplayName(e.target.value)}
              style={inputStyle}
            />
            <input
              name="userId"
              value={userId}
              placeholder="아이디"
              onChange={(e) => setUserId(e.target.value)}
              style={inputStyle}
            />
            <input
              name="password"
              type="password"
              value={password}
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>회원가입</button>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;
