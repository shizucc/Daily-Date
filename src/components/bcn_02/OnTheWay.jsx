import { useRef } from "react";
import classes from "./styles/bcn_02.module.css";

import Motor from "./components/Motor";
import Clouds from "./components/Clouds";
export default function OnTheWay() {
  const gameContainer = useRef();

  return (
    <div className={classes.canvas} ref={gameContainer}>
      <Clouds />
      <div className={classes.choicesBox}>
        <h2>Mau Kemana ?</h2>
        <button>RSM</button>
        <button>Makan Seblak</button>
        <button>Taman Mas Kemambang</button>
      </div>
      <Motor />
    </div>
  );
}
