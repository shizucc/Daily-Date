import { useState } from "react";
import Ingredients from "./components/Ingredients";
import { INGREDIENT_LIST } from "./ingredient_list";
import classes from "./styles/bcn_04b.module.css";

export default function Seblak() {
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
      <section className={classes.note}>
        <ul>
          {selectedIngredients.map((selectedIngredient, index) => (
            <li key={`${index}-${selectedIngredient.title}`}>
              {selectedIngredient.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
