import styled from "styled-components";

const StyledNextPageButton = styled.button`
  position: relative;
  padding: 1.25rem;
  padding-right: 4rem;
  border: 0.75rem solid #5d3652;
  border-radius: 2.5rem;
  top: 1600px;
  left: 750px;
  font-size: 3rem;
  color: #5d3652;
  text-align: start;

  &:active {
    background-color: grey;
  }
`;
export default function NextPageButton({ title, onClick }) {
  return (
    <StyledNextPageButton onClick={onClick}>
      Ke <br /> {title}
    </StyledNextPageButton>
  );
}
