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
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"; // 'reactstrap' 모듈을 사용

//react-redux사용에 필요한 import
import { useSelector, useDispatch } from "react-redux";
import { changeData } from "../store";

function SearchBar() {
  //redux에 만든 state가져오기
  const weatherData = useSelector((state) => state.weatherData);
  const dispatch = useDispatch();
  // 자동 완성 기능
  const [searchTerm, setSearchTerm] = useState("");
  const suggestions = [
    "서울",
    "부산",
    "인천",
    "대구",
    "광주",
    "대전",
    "울산",
    "세종",
    "경기",
    "강원",
    "충청북도",
    "충청남도",
    "전북",
  ];

  //도시이름을 영어로 매핑하는 객체
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

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setDateRange({ startDate: start, endDate: end });
  };

  //인원수 선택 기능 기본인원 :4
  const [numPeople, setNumPeople] = useState(4);

  const [data, setData] = useState({
    region: "",
    date: "",
    numPeople: 4,
  });

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const startDate = dateRange.startDate;
      const endDate = dateRange.endDate;

      if (!startDate || !endDate) {
        // 시작일과 종료일이 모두 선택되지 않은 경우 처리
        console.log("선택하셈");
        return;
      }

      const dates = [];
      // const currentDate = new Date(startDate);
      let currentDate = new Date(startDate);
      endDate.setHours(23, 59, 59, 999); // endDate를 하루의 마지막 시간으로 설정합니다.

      while (currentDate <= endDate) {
        dates.push(toLocalDateString(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      // 선택한도시이름을 영어로 변환
      const regionInEnglish = cityMap[searchTerm[0]] || "Seoul"; //Seoul은 지역입력 안했을때 기본값

      const requestData = {
        // region: searchTerm[0],
        region: regionInEnglish,
        dates,
        numPeople,
      };

      console.log(requestData);

      const response = await axios.post("/api/recommend-campsite", requestData);
      console.log(response.data.list);

      dispatch(changeData(response.data.list));
      console.log("weatherData :" + weatherData);
      console.log(weatherData[0].dt);
    } catch (error) {
      console.log(error);
    }
  };

  function toLocalDateString(date) {
    const offset = date.getTimezoneOffset();
    const adjustedDate = new Date(date.getTime() - offset * 60 * 1000);
    return adjustedDate.toISOString().split("T")[0];
  }

  useEffect(() => {
    // setData({
    //   region: searchTerm,
    //   date: `${dateRange.startDate?.toISOString().slice(0, 10)}-${dateRange.endDate?.toISOString().slice(0, 10)}`,
    //   numPeople,
    // });
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
        <div id="people" style={{ flex: 1, width: "20%", border: "1px solid #ccc" }}>
          인원수
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
