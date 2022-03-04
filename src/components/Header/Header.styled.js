import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  height: 100px;
  border-bottom: 1px solid rgb(211, 214, 218);
`;

export const WordOne = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const WordTwo = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const Letter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-size: 16px;
  font-weight: 700;
  user-select: none;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  background-color: ${(props) =>
    props.isSecondary ? "rgb(201, 180, 88)" : "rgb(106, 170, 100)"};
  box-shadow: rgba(0, 0, 0, 0.07) 0px 10px 40px 0px;
`;
