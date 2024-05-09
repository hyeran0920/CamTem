import React, { Component } from 'react';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '캠핑장 소개' // 기본 탭 설정
    };
  }

  // 탭 클릭 이벤트 핸들러
  handleTabClick = (tabName) => {
    this.setState({ activeTab: tabName });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <button className="tablink" onClick={() => this.handleTabClick('캠핑장 소개')}>캠핑장 소개</button>
        <button className="tablink" onClick={() => this.handleTabClick('이용안내')}>이용안내</button>
        <button className="tablink" onClick={() => this.handleTabClick('위치정보')}>위치정보</button>
        <button className="tablink" onClick={() => this.handleTabClick('캠핑후기')}>캠핑후기</button>
        <button className="tablink" onClick={() => this.handleTabClick('FAQ')}>FAQ</button>

        <div className={activeTab === '캠핑장 소개' ? 'tabcontent active' : 'tabcontent'}>
          <h3>캠핑장 소개</h3>
          <p>Home is where the heart is..</p>
        </div>

        <div className={activeTab === '이용안내' ? 'tabcontent active' : 'tabcontent'}>
          <h3>이용안내</h3>
          <p>Some news this fine day!</p>
        </div>

        <div className={activeTab === '위치정보' ? 'tabcontent active' : 'tabcontent'}>
          <h3>위치정보</h3>
          <p>Get in touch, or swing by for a cup of coffee.</p>
        </div>

        <div className={activeTab === '캠핑후기' ? 'tabcontent active' : 'tabcontent'}>
          <h3>캠핑후기</h3>
          <p>Who we are and what we do.</p>
        </div>
        
        <div className={activeTab === 'FAQ' ? 'tabcontent active' : 'tabcontent'}>
          <h3>FAQ</h3>
          <p>Who we are and what we do.</p>
        </div>

      </div>
    );
  }
}

export default Tab;
