import { useRef } from "react";
import classes from "./styles/bcn_02.module.css";

import Motor from "./components/Motor";
import Clouds from "./components/Clouds";
import Dialog from "./components/Dialog";
export default function OnTheWay() {
  const gameContainer = useRef();

  return (
    <div className={classes.canvas} ref={gameContainer}>
      {/* <Dialog /> */}
      <Clouds />
      <Motor />
    </div>
  );
}
