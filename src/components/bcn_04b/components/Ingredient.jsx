import { useEffect, useRef, useState } from "react";
import { numberToPx } from "../../../utils/converter";
import styled from "styled-components";

const StyledIngredient = styled.img`
  position: absolute;
  height: 200px;
  animation: shake 4s infinite;
  @keyframes shake {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
  }
  &:active {
    height: 190px;
  }
`;
export default function Ingredient({ img, posX, posY, onSelect }) {
  const ingredient = useRef();
  const [isEnableToClick, setIsEnableToClick] = useState(true);

  useEffect(() => {
    ingredient.current.src = img;
    ingredient.current.style.top = numberToPx(posY);
    ingredient.current.style.left = numberToPx(posX);
  }, [img, posX, posY]);
  function handleSelect(img) {
    if (isEnableToClick) {
      onSelect(img);
      ingredient.current.style.opacity = 0;
      setIsEnableToClick(false);
    }
  }
  return (
    <StyledIngredient
      ref={ingredient}
      alt="ingredient_img"
      onClick={() => handleSelect(img)}
    />
  );
}
