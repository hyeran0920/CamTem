import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // 라이브러리의 기본 스타일 추가
import "react-date-range/dist/theme/default.css";
import { useState } from "react";

function CustomCalendar() {
  const [date, setDate] = useState([{ startDate: new Date(), endDate: null, key: "selection" }]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleDateChange = (item) => {
    setDate([item.selection]);
    setShowDatePicker(false);
  };

  return (
    <div className="selectDate">
      <button onClick={() => setShowDatePicker(!showDatePicker)}>
        {date[0].startDate.toLocaleDateString()} ~ {date[0].endDate ? date[0].endDate.toLocaleDateString() : "체크아웃"}
      </button>
      {showDatePicker && (
        <DateRangePicker ranges={date} onChange={handleDateChange} moveRangeOnFirstSelection={false} />
      )}
    </div>
  );
}
export default CustomCalendar;
