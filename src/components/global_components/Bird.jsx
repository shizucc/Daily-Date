/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import bird1Image from "../../assets/global/img/bird1.png";
import bird2Image from "../../assets/global/img/bird2.png";
import bird3Image from "../../assets/global/img/bird3.png";
import { numberToPx } from "../../utils/converter.js";
import styled from "styled-components";

const StyledBird = styled.img`
  position: absolute;
  height: 50px;
`;

export default function Bird({ initialPosX, initialPosY, moveSpeed }) {
  const bird = useRef();
  const [posX, setPosX] = useState(initialPosX);

  useEffect(() => {
    if (posX <= -500) {
      setPosX(1100);
    }
    bird.current.style.left = numberToPx(posX);
    const forwardInterval = setInterval(() => {
      setPosX((prev) => prev - moveSpeed);
    }, 5);

    return () => {
      clearInterval(forwardInterval);
    };
  }, [posX, moveSpeed]);

  useEffect(() => {
    const randomVal = Math.random();
    let birdChoice;
    if (randomVal <= 0.33) {
      birdChoice = bird1Image;
    } else if (randomVal > 0.33 && randomVal <= 0.66) {
      birdChoice = bird2Image;
    } else {
      birdChoice = bird3Image;
    }
    bird.current.src = birdChoice;

    bird.current.style.top = numberToPx(initialPosY);
    bird.current.style.left = numberToPx(initialPosX);
  }, [initialPosX, initialPosY]);
  return <StyledBird ref={bird} alt="" />;
}
