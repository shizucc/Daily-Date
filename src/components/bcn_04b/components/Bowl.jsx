/* eslint-disable react/prop-types */
import styled from "styled-components";
import bowlImg from "../assets/bowl.png";
import { INGREDIENT_LIST } from "../ingredient_list";
import { useEffect, useState } from "react";
const StyledBowl = styled.div`
  position: relative;
  & img {
    position: absolute;
  }
`;
export default function Bowl({ selectedIngredients }) {
  const [isHasIngredient, setIsHasIngredient] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    selectedIngredients.forEach((selectedIngredients) => {
      const index = INGREDIENT_LIST.findIndex(
        (item) => item.title === selectedIngredients.title
      );
      setIsHasIngredient((prev) => {
        const newArr = [...prev];
        newArr[index] = true;
        return newArr;
      });
    });
    console.log("updated");
  }, [selectedIngredients]);
  return (
    <StyledBowl>
      <img
        src={bowlImg}
        alt="bowl_img"
        style={{ width: "400px", top: "1150px", left: "100px", zIndex: 1 }}
      />
      {isHasIngredient[0] && (
        <img
          src={INGREDIENT_LIST[0].img}
          alt=""
          style={{ width: "150px", top: "1050px", left: "200px", zIndex: 0 }}
        />
      )}
      {isHasIngredient[1] && (
        <img
          src={INGREDIENT_LIST[1].img}
          alt=""
          style={{ width: "150px", top: "1050px", left: "110px", zIndex: 0 }}
        />
      )}
      {isHasIngredient[2] && (
        <img
          src={INGREDIENT_LIST[2].img}
          alt=""
          style={{ width: "150px", top: "1060px", left: "300px", zIndex: 0 }}
        />
      )}
      {isHasIngredient[3] && (
        <img
          src={INGREDIENT_LIST[3].img}
          alt=""
          style={{ width: "150px", top: "1060px", left: "200px", zIndex: 0 }}
        />
      )}
      {isHasIngredient[4] && (
        <img
          src={INGREDIENT_LIST[4].img}
          alt=""
          style={{ width: "150px", top: "1060px", left: "300px", zIndex: 0 }}
        />
      )}
      {isHasIngredient[5] && (
        <img
          src={INGREDIENT_LIST[5].img}
          alt=""
          style={{ width: "150px", top: "1090px", left: "250px", zIndex: 0 }}
        />
      )}
      {isHasIngredient[6] && (
        <img
          src={INGREDIENT_LIST[6].img}
          alt=""
          style={{ width: "150px", top: "1060px", left: "370px", zIndex: 0 }}
        />
      )}
      {isHasIngredient[7] && (
        <img
          src={INGREDIENT_LIST[7].img}
          alt=""
          style={{ width: "75px", top: "1090px", left: "330px", zIndex: 0 }}
        />
      )}
    </StyledBowl>
  );
}
