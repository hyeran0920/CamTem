import React, { useState, Component } from "react";
import "react-calendar/dist/Calendar.css";
import "../CheckCalendar.css";
import DatePicker from "react-datepicker";
import { addDays, addMonths } from "date-fns";

// https://reactdatepicker.com/ 에서 Date Range with disabled navigation shown을 사용했음.
// CheckCalendar 함수 컴포넌트 정의
function CheckCalendar() {
  // startDate : 디폴트가 현재 날짜로 설정되어있음
  const [startDate, setStartDate] = useState(new Date());

  // endDate : 디폴트 값은 null, 왜냐하면 언제 정해지는지 모르니까!
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    // 사용자가 날짜를 선택할 수 있는 React 컴포넌트
    <DatePicker
      className="CheckCalendar"
      //선택된 시작일을 표시한다.
      selected={startDate}
      // 날짜가 변경될 대 호출되는 함수를 설정해서 사용자가 날짜를 선정하면 onChange 콜백 함수가 호출되어 선택한 날짜를 보여준다.
      onChange={onChange}
      // 선택 가능한 최소 날짜 : 현재 날짜로 선정해서 어제, 2주 전 등의 날짜를 선택할 수 없게 함.
      minDate={new Date()}
      // 선택 가능한 최대 날짜를 설정한다. addMonths를 써서 현재 날짜로부터 5개월 후까지만 볼 수 있게 설정했음!
      // 그 뭐냐 우리 데이터는 개월이 아니라 일별로 나오는거니까 addDays로 작성하면 되는 줄 알았는데????????????아니었죠?ㅋㅋㅋ
      maxDate={addMonths(new Date(), 5)}
      // maxDate={addDays(new Date(), 16)}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      showDisabledMonthNavigation
    />
  );
}

export default CheckCalendar;
