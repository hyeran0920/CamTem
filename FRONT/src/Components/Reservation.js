import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Container } from "react-bootstrap";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import "../Reservation.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeWeatherData, changeCampingData } from "../store";

function SearchBar() {
  const navigate = useNavigate();
  const weatherData = useSelector((state) => state.weatherData);
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState(null);

  const commonStyles = {
    border: "1px solid #dee2e6", // $datepicker__border-color 대체
    borderRadius: "0.25rem", // $datepicker__border-radius 대체
  };

  const suggestions = [
    { value: "서울", label: "서울" },
    { value: "부산", label: "부산" },
    { value: "인천", label: "인천" },
    { value: "대구", label: "대구" },
    { value: "광주", label: "광주" },
    { value: "대전", label: "대전" },
    { value: "울산", label: "울산" },
    { value: "세종", label: "세종" },
    { value: "경기도", label: "경기도" },
    { value: "강원도", label: "강원도" },
    { value: "충청북도", label: "충청북도" },
    { value: "충청남도", label: "충청남도" },
    { value: "전라북도", label: "전라북도" },
    { value: "전라남도", label: "전라남도" },
    { value: "경상북도", label: "경상북도" },
    { value: "경상남도", label: "경상남도" },
    { value: "제주", label: "제주" },
  ];

  const cityMap = {
    서울: "Seoul",
    부산: "Busan",
    인천: "Incheon",
    대구: "Daegu",
    광주: "Gwangju",
    대전: "Daejeon",
    울산: "Ulsan",
    세종: "Sejong",
    경기: "Gyeonggi",
    강원: "Gangwon",
    충청북도: "Chungcheongbuk-do",
    충청남도: "Chungcheongnam-do",
    전라북도: "Jeollabuk-do",
    전라남도: "Jeollanam-do",
    경상남도: "Gyeongsangnam-do",
    경상북도: "Gyeongsangbuk-do",
    제주: "Jeju",
  };

  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: null,
  });

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

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const startDate = dateRange.startDate;
      const endDate = dateRange.endDate;

      if (!startDate || !endDate) {
        window.alert("시작일과 종료일을 선택하세요.");
        return;
      }

      const dates = [];
      let currentDate = new Date(startDate);
      endDate.setHours(23, 59, 59, 999);

      while (currentDate <= endDate) {
        dates.push(toLocalDateString(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      const regionInEnglish = cityMap[selectedCity.value] || "Seoul";
      const cityName = selectedCity.value || "서울";

      const requestData = { region: regionInEnglish, dates, numPeople };

      const [weatherResponse, campResponse] = await Promise.all([
        axios.post("/api/recommend-campsite", requestData),
        axios.get(`/api/productlist?city=${cityName}`),
      ]);

      dispatch(changeWeatherData(weatherResponse.data.list));
      dispatch(changeCampingData(campResponse.data));
      navigate("/productlist");
    } catch (error) {
      console.log(error);
    }
  };

  function toLocalDateString(date) {
    const offset = date.getTimezoneOffset();
    const adjustedDate = new Date(date.getTime() - offset * 60 * 1000);
    return adjustedDate.toISOString().split("T")[0];
  }

  useEffect(() => {}, [dateRange, numPeople, weatherData]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWindowWidth(entry.contentRect.width);
      }
    });
    resizeObserver.observe(document.documentElement);
    return () => resizeObserver.disconnect();
  }, []);

  const isMobile = windowWidth <= 768;

  
  return (
    <Container>
      <div
        id="reservation"
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          fontSize: "1rem",
          height: "100%"
        }}
      >
        <div style={{ width: isMobile ? "80%" : "30%" }}>
          <Select
            id="search-term"
            placeholder={isMobile ? "가고 싶은 곳" : "지역을 선택하세요"}
            options={suggestions}
            value={selectedCity}
            onChange={setSelectedCity}
            styles={{
              container: (base) => ({
                ...base,
                // ...commonStyles, // 공통 스타일 추가
                flex: 1,
              }),
              input: (base) => ({
                ...base,
                fontSize: "1rem",
              }),
              placeholder: (base) => ({
                ...base,
                fontSize: "1rem",
              }),
            }}
          />
        </div>
        <div style={{ width: isMobile ? "80%" : "40%", display: "flex", justifyContent: "flex-start", marginLeft: isMobile ? "-10%" : "auto" }}>
          <DatePicker
            selectsRange={true}
            className="datepicker"
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            minDate={new Date()}
            onChange={handleDateChange}
            style={{ fontSize: "1rem", ...commonStyles }} // 공통 스타일 추가
          />
        </div>
        <div
          id="people"
          style={{
            ...commonStyles, // 공통 스타일 추가
            flex: 1,
            width: isMobile ? "80%" : "20%",
            height: "2.2rem",
            padding: "0",
            display: isMobile ? "none" : "flex", // 모바일 화면에서는 보이지 않도록 설정
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Dropdown isOpen={!isMobile && dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
              style={{
                border: "none",
                background: "none",
                color: "inherit",
                paddingTop: "0.3rem",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              {numPeople} 명
            </DropdownToggle>
            <DropdownMenu
              style={{
                display: !isMobile && dropdownOpen ? "flex" : "none", // 모바일 화면에서는 보이지 않도록 설정
                padding: "0",
                width: "100%",
                borderRadius: "0.3rem",
                overflow: "hidden",
              }}
            >
              <DropdownItem
                onClick={() => handlePeopleChange(-1)}
                style={{
                  paddingLeft: "1.2rem",
                  backgroundColor: "transparent",
                  fontSize: "1rem",
                }}
              >
                -
              </DropdownItem>
              <DropdownItem
                style={{
                  padding: "0.6rem",
                  backgroundColor: "transparent",
                  fontSize: "1rem",
                }}
              >
                {numPeople}
              </DropdownItem>
              <DropdownItem
                onClick={() => handlePeopleChange(1)}
                style={{
                  padding: "0.6rem",
                  backgroundColor: "transparent",
                  fontSize: "1rem",
                }}
              >
                +
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div style={{ flex: 1, width: isMobile ? "80%" : "10%" }}>
          <button
            id="placesearch"
            onClick={handleSearch}
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              color: "white",
              border: "none",
              borderRadius: "0.3rem",
              cursor: "pointer",
             
            }}
          >
            검색
          </button>
        </div>
      </div>
    </Container>
  );
}

export default SearchBar;