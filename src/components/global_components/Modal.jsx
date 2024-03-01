import styled from "styled-components";

const StyledDialogContainer = styled.div`
  position: relative;
`;

const StyledDialogContent = styled.div`
  position: absolute;
  min-width: 60rem;
  max-width: 60rem;
  padding: 0;
  z-index: 2;
  border-radius: 1.5rem;
  background-color: whitesmoke;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  animation: slide-down-fade-in 0.3s ease-out forwards;
  top: 300px;
  left: 50px;
`;

function Modal({ isOpen, children }) {
  return (
    isOpen && (
      <StyledDialogContainer>
        <StyledDialogContent>{children}</StyledDialogContent>
      </StyledDialogContainer>
    )
  );
}

export default Modal;
