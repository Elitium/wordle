import { WordContainer, Letter } from "./Word.styled";

export const Word = ({ word }) => {
  return (
    <WordContainer>
      {[...word].map((letter, index) => (
        <Letter key={index}>{letter}</Letter>
      ))}
    </WordContainer>
  );
};
