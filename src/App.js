import { useEffect, useState } from "react";
import { utils } from "react-modern-calendar-datepicker";
import { dictionary } from "./assets/dictionary";
import { GlobalStyles, Main } from "./GlobalStyles.styled";
import { Header } from "./components/Header/Header";
import { Word } from "./components/Word/Word";
import { Calendar } from "./components/Calendar/Calendar";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(utils().getToday());
  const [word, setWord] = useState(null);

  useEffect(() => {
    const date = new Date();
    date.setDate(selectedDay.day);
    date.setMonth(selectedDay.month - 1);
    date.setFullYear(selectedDay.year);

    const startDate = new Date(2021, 5, 19, 0, 0, 0, 0);
    const difference =
      new Date(date).setHours(0, 0, 0, 0) - startDate.setHours(0, 0, 0, 0);
    const wordIndex = Math.round(difference / 86400000);

    setWord(dictionary[wordIndex]);
  }, [selectedDay]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        {word && <Word word={word} />}
        <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      </Main>
    </>
  );
}
