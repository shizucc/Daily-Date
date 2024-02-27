import classes from "./styles/bcn_04a.module.css";
import leftButton from "./assets/left_button.png";
import rightButton from "./assets/right_button.png";
import pressButton from "./assets/press_button.png";
import dollsImg from "./assets/dolls.png";
import { useState } from "react";

import Crane from "./components/Crane";
export default function Timezone() {
  const [pressed, setPressed] = useState({
    direction: "left",
    isPress: false,
  });

  const [isCaptured, setIsCaptured] = useState(false);

  return (
    <div className={classes.canvas}>
      <Crane
        isPressLeft={pressed.direction === "left" && pressed.isPress}
        isPressCapture={isCaptured}
        isPressRight={pressed.direction === "right" && pressed.isPress}
      />
      <section className={classes.dollsContainer}>
        <img className={classes.dolls} src={dollsImg} alt="" />
      </section>
      <section className={classes.buttons}>
        <img
          className={classes.btnLeft}
          src={leftButton}
          alt="btn_left"
          onMouseDown={() => setPressed({ direction: "left", isPress: true })}
          onMouseUp={() => setPressed({ direction: "left", isPress: false })}
          onMouseLeave={() => setPressed({ direction: "left", isPress: false })}
        />
        <img
          className={classes.btnPress}
          onClick={() => setIsCaptured(true)}
          src={pressButton}
          alt="btn_press"
        />
        <img
          className={classes.btnRight}
          src={rightButton}
          alt="btn_right"
          onMouseDown={() => setPressed({ direction: "right", isPress: true })}
          onMouseUp={() => setPressed({ direction: "right", isPress: false })}
          onMouseLeave={() =>
            setPressed({ direction: "right", isPress: false })
          }
        />
      </section>
    </div>
  );
}
