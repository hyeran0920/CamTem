import { Navigate, useNavigate } from "react-router-dom";
import defaultImage from '../images/image44.png';

function Camping({ camping }) {

  let navigate = useNavigate();
  
  return (
    <div className="캠핑장 목록">
      <div className="list">
        <img src={camping.firstImageUrl ? camping.firstImageUrl : defaultImage} />
        <div className="infomation">
          <h1>{camping.facltNm}</h1>
          <p>{camping.contentId}</p>
          <p>{camping.intro}</p>
          <p>캠핑장 소개</p>
          <div className="icon-button-container">
            <div>
              <i className="bi bi-wifi"></i>
              <i className="bi bi-fire"></i>
              <i className="bi bi-ev-station"></i>
              <i className="bi bi-p-circle"></i>
            </div>
            <button onClick={() => navigate("/ProductDetail")} >자세히 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Camping;
