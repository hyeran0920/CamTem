import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import defaultImage from "../images/image44.png";

function Camping({ camping, onNavigate ,showAddress }) {
  let navigate = useNavigate();

  const buttonContainerStyle = {
    position: 'relative', // 부모 요소를 상대적으로 위치시킴
  };

  const buttonStyle = {
    backgroundColor: 'darkcyan', // 버튼 배경색
    border: 'none',
    color: 'white', // 버튼 텍스트 색상
    padding: '1% 2%', // 버튼 내부 여백
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '1rem', // 폰트 크기
    margintop:'1%', // 버튼 간격
    cursor: 'pointer',
    borderRadius: '0.25rem', // 버튼 모서리를 둥글게 만듦
    transitionDuration: '0.4s',
    boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)', // 버튼에 그림자 효과 추가
    position: 'absolute', // 버튼을 절대 위치로 설정
    bottom: '1rem', // 하단에서 1rem 떨어진 위치에 버튼 배치
  };
  

  // 화면 크기를 기준으로 상태를 설정하기 위한 상태 변수
  const [isMobile, setIsMobile] = useState(false);
  // 모바일에서 보여질 최대 글자 수
  const mobileTextLimit = 15;

  const handleResize = () => {
    // 화면 너비가 600px 이하인 경우 isMobile을 true로 설정
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    handleResize(); // 초기 상태 설정
    window.addEventListener('resize', handleResize); // 윈도우 리사이즈 이벤트에 핸들러 추가
    return () => window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 리스너 제거
  }, []);

  

  return (
    <div className="캠핑장 목록">
      <div className="list" style={{ position: 'relative' }}>
        <img src={camping.firstImageUrl ? camping.firstImageUrl : defaultImage} style={{ width: "50%" }} />
        <div className="infomation">
          <h2>{camping.facltNm}</h2>
          <hr style={{ width: "80%" }} />
          <div style={{ width: "80%" }}>
          {showAddress && <p>{camping.addr1}</p>} 
          {/* showAddress가 true일 때만 주소를 렌더링합니다. */}
            <br />
            {isMobile ? null : (
              <p>
                {camping.intro
                  ? camping.intro.length > (isMobile ? mobileTextLimit : 50)
                    ? `${camping.intro.substring(0, isMobile ? mobileTextLimit : 50)}   ... 더보기`
                    : camping.intro
                  : (
                    <>
                      기본 제공되는 캠핑장의 정보가 없습니다. <br />
                      자세히 보기를 눌러서 확인해주세요
                    </>
                  )
                }
              </p>
            )}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {!isMobile && (
                <div>
                  <i className="bi bi-wifi" style={{ fontSize: '2em', marginRight: '0.5em' }}></i>
                  <i className="bi bi-fire" style={{ fontSize: '2em', marginRight: '0.5em' }}></i>
                  <i className="bi bi-ev-station" style={{ fontSize: '2em', marginRight: '0.5em' }}></i>
                  <i className="bi bi-p-circle" style={{ fontSize: '2em', marginRight: '0.5em' }}></i>
                </div>
              )}
            </div>
            <br />
            <button style={buttonStyle} onClick={onNavigate} >
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camping;