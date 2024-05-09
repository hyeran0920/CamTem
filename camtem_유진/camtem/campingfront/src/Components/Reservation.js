import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-date-range/dist/styles.css"; // 라이브러리의 기본 스타일 추가
import "react-date-range/dist/theme/default.css";
import axios from "axios";

// 달력용
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import "../Reservation.css";

//people
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//react-redux사용에 필요한 import
import { useSelector, useDispatch } from "react-redux";
import { changeData } from "../store";





function SearchBar() {
  // redux에 만든 state 가져오기
  const weatherData = useSelector((state) => state.weatherData);
  const dispatch = useDispatch();
  // 자동 완성 기능
  const [searchTerm, setSearchTerm] = useState("");
  const suggestions = ["서울", "부산", "인천", "대구", "광주", "대전", "울산", "세종", "경기", "강원", "충청북도", "충청남도", "전북"];

  // 도시 이름을 영어로 매핑하는 객체
  const cityMap = {
    서울: "Seoul",
    부산: "Busan",
    인천: "Incheon",
    // 나머지 도시들도 이와 같이 매핑
  };

  // 날짜 선택 기능
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: null,
  });
  //인원수
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [numPeople, setNumPeople] = useState(2);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handlePeopleChange = (change) => {
    setNumPeople((prevNumPeople) => Math.max(prevNumPeople + change, 0));
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setDateRange({ startDate: start, endDate: end });
  };

  const [data, setData] = useState({
    region: "",
    date: "",
    numPeople: "",
  });

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const startDate = dateRange.startDate;
      const endDate = dateRange.endDate;

      if (!startDate || !endDate) {
        console.log("시작일과 종료일을 선택하세요.");
        return;
      }

      // 날짜 범위에서 각 날짜를 배열에 추가
      const dates = [];
      let currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        dates.push(toLocalDateString(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      // 지역 입력 안 했을 때 기본 지역은 "Seoul"
      const regionInEnglish = cityMap[searchTerm[0]] || "Seoul";

      const requestData = {
        region: regionInEnglish,
        dates,
        numPeople,
      };

      console.log("요청 데이터:", requestData);

      // API 호출
      const response = await axios.post("/api/recommend-campsite", requestData);
      const list = response.data.list || [];

      console.log("응답 데이터:", list);

      // 응답 데이터가 유효할 경우 Redux에 list를 저장
      if (list.length > 0) {
        dispatch(changeData(list));
        console.log("weatherData[0].formattedDt:", list[0].formattedDt);
      } else {
        console.log("응답 데이터가 비어있거나 올바르지 않습니다.");
      }
    } catch (error) {
      console.log("오류 발생:", error);
    }



  };

  function toLocalDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }

  useEffect(() => {
    console.log(dateRange);
  }, [searchTerm, dateRange, numPeople]);

  return (
    <Container>
      <div id="reservation" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        <div style={{ width: "30%" }}>
          <Typeahead
            id="search-term"
            placeholder="지역을 검색해보세요"
            onChange={setSearchTerm}
            options={suggestions}
            selected={searchTerm}
            style={{ flex: 1 }}
          />
        </div>
        <div style={{ width: "40%", display: "flex", justifyContent: "flex-start", margin: "0" }}>
          <DatePicker
            selectsRange={true}
            className="datepicker"
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            minDate={new Date()}
            onChange={handleDateChange}
          />
        </div>
        <div id="people" style={{ flex: 1, width: '20%', border: '1px solid #DEE2E6 ', height: '35px', padding: '0' }}>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
              style={{
                border: 'none',
                background: 'none',
                color: 'inherit', // 글씨색 inherit
                paddingTop: '5px',
                cursor: 'pointer'
              }}
            >
              인원수 {numPeople}
            </DropdownToggle>
            <DropdownMenu
    style={{
        display: dropdownOpen ? 'flex' : 'none',
        padding: '0',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    }}
>
    <DropdownItem
        onClick={() => handlePeopleChange(-1)}
        style={{
            paddingLeft: '20px',
            backgroundColor: 'transparent'
        }}
    >
        -
    </DropdownItem>
    <DropdownItem
        style={{
            padding: '10px',
            backgroundColor: 'transparent'
        }}
    >
        {numPeople}
    </DropdownItem>
    <DropdownItem
        onClick={() => handlePeopleChange(1)}
        style={{
            padding: '10px',
            backgroundColor: 'transparent'
        }}
    >
        +
    </DropdownItem>
</DropdownMenu>

          </Dropdown>
        </div>

        <div style={{ flex: 1, width: "10%" }}>
          <button id="placesearch" onClick={handleSearch}>
            검색하기
          </button>
        </div>
      </div>
    </Container>
  );
}

export default SearchBar;
