import { useEffect, useRef, useState } from "react";
import { numberToPx } from "../../../utils/converter";
import styled from "styled-components";

const StyledFish = styled.img`
  position: absolute;
  height: 150px;
`;

export default function Fish({
  img,
  initialPosX,
  initialPosY,
  moveSpeed,
  isMoveForward,
}) {
  const fish = useRef();
  const [posX, setPosX] = useState(initialPosX);

  useEffect(() => {
    if (posX <= -500 && !isMoveForward) {
      setPosX(1100);
    } else if (posX > 1100 && isMoveForward) {
      setPosX(-500);
    }
    fish.current.style.left = numberToPx(posX);
    const forwardInterval = setInterval(() => {
      if (isMoveForward) {
        setPosX((prev) => prev + moveSpeed);
      } else {
        setPosX((prev) => prev - moveSpeed);
      }
    }, 5);

    return () => {
      clearInterval(forwardInterval);
    };
  }, [posX, moveSpeed, isMoveForward]);

  useEffect(() => {
    fish.current.src = img;
    fish.current.style.top = numberToPx(initialPosY);
    fish.current.style.left = numberToPx(initialPosX);
  }, [img, initialPosX, initialPosY]);
  return <StyledFish ref={fish} alt="fish_img" />;
}
