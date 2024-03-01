import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledDialogResponse = styled.div`
  position: absolute;
  padding-inline: 4rem;
  margin: 2rem;
  border-radius: 1rem;
  background-color: white;

  & p {
    font-size: 3rem;
  }
`;
export default function DialogResponse({ dialogText }) {
  return createPortal(
    dialogText && (
      <StyledDialogResponse>
        <p>{dialogText}</p>
      </StyledDialogResponse>
    ),
    document.getElementById("dialog-response")
  );
}
