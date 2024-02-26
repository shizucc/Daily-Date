import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledDialog = styled.dialog`
  position: relative;
  min-width: 30rem;
  max-width: 60rem;
  padding: 0;
  z-index: 2;
  border-radius: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  animation: slide-down-fade-in 0.3s ease-out forwards;
`;

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <StyledDialog ref={dialog} onClose={onClose}>
      {open ? children : null}
    </StyledDialog>,
    document.getElementById("modal")
  );
}

export default Modal;
