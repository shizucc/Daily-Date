import styled from "styled-components";
import Ingredient from "./Ingredient";
import { INGREDIENT_LIST } from "../ingredient_list";

const StyledIngredients = styled.section`
  position: relative;
`;

export default function Ingredients({ onSelect }) {
  return (
    <StyledIngredients>
      <Ingredient
        img={INGREDIENT_LIST[0].img}
        posX={100}
        posY={400}
        onSelect={onSelect}
      />
      <Ingredient
        img={INGREDIENT_LIST[1].img}
        posX={900}
        posY={400}
        onSelect={onSelect}
      />
      <Ingredient
        img={INGREDIENT_LIST[2].img}
        posX={600}
        posY={400}
        onSelect={onSelect}
      />
      <Ingredient
        img={INGREDIENT_LIST[3].img}
        posX={300}
        posY={400}
        onSelect={onSelect}
      />
      <Ingredient
        img={INGREDIENT_LIST[4].img}
        posX={25}
        posY={750}
        onSelect={onSelect}
      />
      <Ingredient
        img={INGREDIENT_LIST[5].img}
        posX={350}
        posY={750}
        onSelect={onSelect}
      />
      <Ingredient
        img={INGREDIENT_LIST[6].img}
        posX={600}
        posY={750}
        onSelect={onSelect}
      />
      <Ingredient
        img={INGREDIENT_LIST[7].img}
        posX={900}
        posY={750}
        onSelect={onSelect}
      />
    </StyledIngredients>
  );
}
