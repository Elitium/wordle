import styled from "styled-components";

export const CalendarContainer = styled.div`
  position: relative;

  & .calendar {
    font-family: "Inter", sans-serif;
    width: 320px;
  }
`;

export const ButtonToday = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  z-index: 999;
  bottom: 10px;
  right: 10px;
  background-color: #6aaa64;
  border: none;
  outline: none;

  &:hover {
    opacity: 0.9;
  }

  & > svg {
    fill: rgb(255, 255, 255);
    width: 20px;
    height: 20px;
  }
`;
