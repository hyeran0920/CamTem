import { Container } from "react-bootstrap";
import TopNav from "../Components/TopNav";
import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import DetailTab from "../Components/DetailTab";

function ProductDetail() {
  return(
    <div className="productDetail">
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <TopNav bg="dark" theme="dark" />
        

        <div className="list">
          <img src={require('../images/image44.png')} alt="캠핑장 이미지" /> 
        <div className="infomation">
          <h1>서울대공원 캠핑장</h1>
          <p>캠핑장 주소: 서울시 관악구 신림동</p>
          <p>캠핑장 번호: 02-865-9866</p>
          <p>캠핑장 운영기간: 2월 ~ 11월</p>
        <div className="icon-button-container">
            <div>
                <i className="bi bi-wifi"></i>
                <i className="bi bi-fire"></i>
                <i className="bi bi-ev-station"></i>
                <i className="bi bi-p-circle"></i>
            </div>
            <div>
              <button style={{ display: 'inline-block', marginRight: '10px' }}>찜하기</button>
              <button style={{ display: 'inline-block' }}>예약하기</button>
            </div>
        </div>
        </div>
        </div>
        
        
        <DetailTab></DetailTab>

        
      </Container>
      <Footer />
    </div>
  );
}

export default ProductDetail;