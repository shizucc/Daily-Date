import { useEffect, useRef, useState } from "react";
import { numberToPx } from "../../../utils/converter";
import styled from "styled-components";
import snackImg from "../assets/snack.png";

const StyledSnack = styled.img`
  position: absolute;
  width: 400px;
`;
export default function Snack({ posX, posY }) {
  const [opacity, setOpacity] = useState(1);
  const snack = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prev) => prev - 0.001);
      if (opacity == 0) {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [opacity]);

  useEffect(() => {
    snack.current.style.top = numberToPx(posY);
    snack.current.style.left = numberToPx(posX);
    snack.current.style.opacity = opacity;
  }, [posX, posY, opacity]);
  return <StyledSnack ref={snack} src={snackImg} alt="snack_img" />;
}
