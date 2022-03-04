import { HeaderContainer, WordOne, WordTwo, Letter } from "./Header.styled";

export const Header = () => (
  <HeaderContainer>
    <WordOne>
      <Letter>w</Letter>
      <Letter>o</Letter>
      <Letter>r</Letter>
      <Letter>d</Letter>
      <Letter>l</Letter>
      <Letter>e</Letter>
    </WordOne>
    <WordTwo>
      <Letter isSecondary>c</Letter>
      <Letter isSecondary>a</Letter>
      <Letter isSecondary>l</Letter>
      <Letter isSecondary>e</Letter>
      <Letter isSecondary>n</Letter>
      <Letter isSecondary>d</Letter>
      <Letter isSecondary>a</Letter>
      <Letter isSecondary>r</Letter>
    </WordTwo>
  </HeaderContainer>
);
