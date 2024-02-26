import classes from "./styles/bcn_04a.module.css";
import leftButton from "./assets/left_button.png";
import rightButton from "./assets/right_button.png";
import pressButton from "./assets/press_button.png";
import craneCaptureImg from "./assets/crane_capture.png";
import dollsImg from "./assets/dolls.png";
import { useEffect, useRef, useState } from "react";
import { numberToPx } from "../../utils/converter";
export default function Timezone() {
  const craneCapture = useRef();
  const cranePillar = useRef();
  const [pressed, setPressed] = useState({
    direction: "left",
    isPress: false,
  });

  const [cranePosition, setCranePosition] = useState({
    cranePillar: 480,
    craneCapture: 357,
  });

  useEffect(() => {
    cranePillar.current.style.left = numberToPx(cranePosition.cranePillar);
    craneCapture.current.style.left = numberToPx(cranePosition.craneCapture);
  }, [cranePosition]);

  useEffect(() => {
    let intervalId;
    const handlePressStart = () => {
      intervalId = setInterval(() => {
        if (pressed.direction === "left") {
          setCranePosition((prev) => ({
            cranePillar: prev.cranePillar - 1,
            craneCapture: prev.craneCapture - 1,
          }));
        } else {
          setCranePosition((prev) => ({
            cranePillar: prev.cranePillar + 1,
            craneCapture: prev.craneCapture + 1,
          }));
        }
      }, 10);
    };

    const handlePressEnd = () => {
      clearInterval(intervalId);
    };

    if (pressed.isPress) {
      handlePressStart();
    } else {
      handlePressEnd();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [pressed]);

  return (
    <div className={classes.canvas}>
      <section className={classes.craneContainer}>
        <div ref={cranePillar} className={classes.cranePillar}></div>
        <img
          ref={craneCapture}
          className={classes.craneCapture}
          src={craneCaptureImg}
          alt=""
        />
      </section>
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
        <img className={classes.btnPress} src={pressButton} alt="btn_press" />
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
