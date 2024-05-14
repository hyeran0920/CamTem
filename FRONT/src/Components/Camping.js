import { useNavigate } from "react-router-dom";
import defaultImage from "../images/image44.png";


function Camping({ camping }) {
  let navigate = useNavigate; 
  const buttonContainerStyle = {
    position: 'relative', // 부모 요소를 상대적으로 위치시킴
    };
    
    const buttonStyle = {
    backgroundColor: 'darkcyan', // 버튼 배경색
    border: 'none',
    color: 'white', // 버튼 텍스트 색상
    padding: '10px 20px', // 버튼 내부 여백
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '4px', // 버튼 모서리를 둥글게 만듦
    transitionDuration: '0.4s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // 버튼에 그림자 효과 추가
    position: 'absolute', // 버튼을 절대 위치로 설정
    bottom: '10px', // 하단에서 10px 떨어진 위치에 버튼 배치
    };

  return (
    <div className="캠핑장 목록">
      <div className="list" style={{ position: 'relative' }}>
      <img src={camping.firstImageUrl ? camping.firstImageUrl : defaultImage} style={{width:"600px"}}/>
        <div className="infomation">
          <h1>{camping.facltNm}</h1>
          <hr/>
          <div style={{width:"70%"}}>
  <p>{camping.contentId}</p>

          <p>{camping.addr1}</p>
          <br />
          <p>

          {camping.intro
            ? camping.intro.length > 100
              ? `${camping.intro.substring(0, 100)}   ... 더보기`
              : camping.intro
            : (
              <>
                기본 제공되는 캠핑장의 정보가 없습니다. <br />
                자세히 보기를 눌러서 확인해주세요
              </>
            )
          }
                </p>          
                <div style={{ display: 'flex', alignItems: 'center' }}>
  <div>
    <i className="bi bi-wifi" style={{ fontSize: '2em',marginRight: '0.5em'  }}></i>
    <i className="bi bi-fire" style={{ fontSize: '2em',marginRight: '0.5em'  }}></i>
    <i className="bi bi-ev-station" style={{ fontSize: '2em',marginRight: '0.5em'  }}></i>
    <i className="bi bi-p-circle" style={{ fontSize: '2em',marginRight: '0.5em'  }}></i>
  </div>
</div>

            <br />
            <button style={buttonStyle} onClick={() => navigate(`/ProductDetail/${camping.contentId}`)} >
              자세히 보기
            </button>
            </div>
            </div>
      </div>
    </div>
  );
}
export default Camping;
