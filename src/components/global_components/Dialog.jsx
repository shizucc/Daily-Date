import { createPortal } from "react-dom";
import { styled } from "styled-components";

const StyledChoicesBox = styled.div`
  position: absolute;
  margin-top: 20rem;
  margin-inline: 5.5rem;
  padding-block: 3rem;
  width: 55rem;
  border: 15px solid #5d3652;
  border-radius: 60px;
  background-color: rgba(243, 64, 152, 0.82);
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    margin: 0;
    margin-bottom: 1.5rem;
    font-size: 5rem;
    color: white;
    font-weight: 700;
  }

  & button {
    width: 70%;
    padding-block: 1.5rem;
    border: 10px solid #5d3652;
    border-radius: 25px;
    margin-block: 0.2rem;
    background-color: white;
    color: black;
    font-size: 2.5rem;
    font-weight: 600;
  }

  & button:active {
    background-color: grey;
  }
`;
export default function Dialog({ question, answers, onSelectAnswer }) {
  return createPortal(
    <StyledChoicesBox>
      <h2>{question}</h2>
      {answers.map((answer, index) => (
        <button
          key={`${answer}${index}`}
          onClick={() => onSelectAnswer(answer)}
        >
          {answer}
        </button>
      ))}
    </StyledChoicesBox>,
    document.getElementById("dialog")
  );
}
