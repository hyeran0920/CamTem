function Camping({ camping }) {
  return (
    <div className="캠핑장 목록">
      <div className="list">
        <img src={camping.firstImageUrl} />
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
            <button>자세히 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Camping;
