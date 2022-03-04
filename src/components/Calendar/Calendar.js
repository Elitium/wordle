import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { CalendarContainer, ButtonToday } from "./Calendar.styled";
import {
  Calendar as ModernCalendar,
  utils
} from "react-modern-calendar-datepicker";
import { MdToday } from "react-icons/md";

export const Calendar = ({ selectedDay, setSelectedDay }) => {
  const minimumDate = {
    year: 2021,
    month: 6,
    day: 19
  };

  const maximumDate = {
    year: 2027,
    month: 10,
    day: 14
  };

  return (
    <CalendarContainer>
      <ModernCalendar
        value={selectedDay}
        onChange={setSelectedDay}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        colorPrimary="#6aaa64"
        slideAnimationDuration="0.2"
        calendarClassName="calendar"
      />
      <ButtonToday
        title="Today"
        onClick={() => setSelectedDay(utils().getToday())}
      >
        <MdToday />
      </ButtonToday>
    </CalendarContainer>
  );
};
