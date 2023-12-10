import { useState } from "react";
import Day from "./Day";
import { calendar } from "../../styles/calendar.css";

const Calendar = () => {
  const [month, setMonth] = useState(getMonth);

  function getMonth() {
    const currentYear = new Date().getFullYear();

    const decemberDays = new Date(currentYear, 12, 0).getDate();

    const decemberArray = Array.from(
      { length: decemberDays },
      (_, index) => index + 1
    );

    return decemberArray;
  }
  return (
    <div>
      <div>{new Date().getFullYear()}</div>
      <div className={calendar}>
        {month.map((day, idx) => (
          <Day key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
