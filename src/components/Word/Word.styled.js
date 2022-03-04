import styled from "styled-components";

export const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  width: 320px;
  padding: 10px 0;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 10px 40px 0px;
`;

export const Letter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  font-size: 36px;
  font-weight: 700;
  user-select: none;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  background-color: rgb(106, 170, 100);
`;
