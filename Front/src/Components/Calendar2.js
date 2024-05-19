import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "../css/Calendar2.css"

function Calendar2({ todayDateString }) {
  const [value, onChange] = useState(new Date());
  
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default Calendar2;
