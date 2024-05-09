import React, { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";

function SearchInput() {
  const [location, setLocation] = useState("");

  const handleLocationChange = (eventKey) => {
    setLocation(eventKey);
    const dateSection = document.getElementById("date-section");
    dateSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="search-input">
      <div className="locationDrop">
        <Dropdown onSelect={handleLocationChange}>
          <Dropdown.Toggle variant="secondary">{location || "지역 선택"}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="서울">서울</Dropdown.Item>
            <Dropdown.Item eventKey="부산">부산</Dropdown.Item>
            <Dropdown.Item eventKey="경기">경기</Dropdown.Item>
            <Dropdown.Item eventKey="강원">강원</Dropdown.Item>
            {/* 다른 지역 옵션 추가 */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default SearchInput;
