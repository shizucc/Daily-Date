import { useState } from "react";
import Ingredients from "./components/Ingredients";
import { INGREDIENT_LIST } from "./ingredient_list";
import classes from "./styles/bcn_04b.module.css";
import Bowl from "./components/Bowl";
import NextPageButton from "../global_components/NextPageButton";

export default function Seblak({ toNextPage }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  function handleSelectIngredients(identifier) {
    INGREDIENT_LIST.forEach((ingredient) => {
      if (ingredient.img === identifier) {
        setSelectedIngredients((prev) => {
          return [...prev, ingredient];
        });
      }
    });
  }

  return (
    <div className={classes.canvas}>
      <Ingredients onSelect={handleSelectIngredients} />
      <Bowl selectedIngredients={selectedIngredients} />
      <section className={classes.note}>
        <ul>
          {selectedIngredients.map((selectedIngredient, index) => (
            <li key={`${index}-${selectedIngredient.title}`}>
              {selectedIngredient.title}
            </li>
          ))}
        </ul>
      </section>
      <NextPageButton
        title={"Meja Makan"}
        onClick={() => toNextPage("bcn_05b")}
      />
    </div>
  );
}
