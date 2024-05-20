import React from 'react';
import logo from '../images/logo1.png';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <br/>
      <br/>
      <div className="footer-left">
        <p>
          중앙 정보 기술 인재 개발원
          <br />
          (주)CAMTEM
          <br />
          팀 : 캠프핑
          <br />
          날씨, 캠핑장 Open API를 활용한 지역 기반 캠핑장 추천
          <br />
          <br />
          팀장 : 서유진 hyeran0920@naver.com
          <br />
          팀원 : 박지연 qkrwluds7998@gmail.com, 변의성 qusdml123@gmail.com, 
          <br />
          송진원 jinwonsong@naver.com, 유지연yyaong425@gmail.com
        </p>
      </div>
      <div className="footer-right">
        <p>
          <img src={logo} alt="logo" style={{ width: '70px' }} />
          <br />
          <br />
          <img src="https://blog.kakaocdn.net/dn/SUNA8/btsCP4xUeTw/DTBzxGgaKrkR4Li6kpJ581/img.png" style={{ width: '110px' }} alt="logo1" />
          <img src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png" style={{ width: '60px' }} alt="logo2" />
          <img src="https://play-lh.googleusercontent.com/pPTTNz433EYFurg2j__bFU5ONdMoU_bs_-yS2JLZriua3iHrksGP6XBPF5VtDPlpGcW4=w600-h300-pc0xffffff-pd" style={{ width: '60px' }} alt="logo3" />
          <img src="https://blog.kakaocdn.net/dn/bvWwVu/btq7AepYYj4/mUzC7IYWd7WUePQ3VgETpk/img.png" style={{ width: '30px' }} alt="logo4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" style={{ width: '35px' }} alt="logo5" />
          <img src="https://velog.velcdn.com/images/handmk/post/8a14410a-085c-4589-9eb3-f8c0a4470b60/image.png" style={{ width: '50px' }} alt="logo6" />
          <br />
          <br />
          GitHub URL: <a href="https://github.com/hyeran0920/CamTem" style={{ color: 'white' }}>https://github.com/hyeran0920/CamTem</a>
          <br />
          PPT
          <br />
          Youtube
        </p>
      </div>
    </div>
  );
}

export default Footer;
