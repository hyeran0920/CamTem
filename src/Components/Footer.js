import logo from "../images/logo1.png";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "200px",
        backgroundColor: "black",
        color: "white",
        padding: "30px 30px",
        marginTop: "20px",
      }}
    >
      <div style={{ float: "left", width: "50%", textAlign: "left" }}>
        <p>
          이용약관 | 개인정보처리방침
          <br />
          고객센터
          <br />
          010-1234-5678
          <br />
          근무시간 : 주중 오전11시 ~ 오후 1시
          <br />
          점심시간 : 주중 오전12시 ~ 오후 1시
          <br />
          휴무일 : 주말 및 공휴일
        </p>
      </div>
      <div style={{ float: "left", width: "50%", textAlign: "right" }}>
        <p>
          <img src={logo} style={{ width: "70px" }} />
          <br />
          대표자 : 그 누군가 || TEL : 010-112
          <br />
          E-mail : abcdef@gmail.co.kr
          <br />
          본사: 지구 그 어딘가
          <br />
          Copyright © 2024 CamTem CO.LTD. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
export default Footer;
