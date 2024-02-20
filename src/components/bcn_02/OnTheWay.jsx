import { useRef } from "react";
import classes from "./styles/bcn_02.module.css";

import Motor from "./components/Motor";
export default function OnTheWay() {
  const gameContainer = useRef();

  return (
    <div className={classes.canvas} ref={gameContainer}>
      <h1>Hello World</h1>
      <Motor />
    </div>
  );
}
