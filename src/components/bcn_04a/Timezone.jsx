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

  const [craneState, setCraneState] = useState({
    cranePillarX: 480,
    cranePillarH: 100,
    craneCaptureX: 357,
    craneCaptureY: 490,
  });

  const [isCaptured, setIsCaptured] = useState(false);

  useEffect(() => {
    cranePillar.current.style.height = numberToPx(craneState.cranePillarH);
    cranePillar.current.style.left = numberToPx(craneState.cranePillarX);
    craneCapture.current.style.left = numberToPx(craneState.craneCaptureX);
    craneCapture.current.style.top = numberToPx(craneState.craneCaptureY);
  }, [craneState]);

  useEffect(() => {
    if (isCaptured) {
      const intervalDown = setInterval(() => {
        if (craneState.cranePillarH >= 600) {
          clearInterval(intervalDown);

          setTimeout(() => {
            const intervalUp = setInterval(() => {
              setCraneState((prev) => ({
                ...prev,
                cranePillarH: prev.cranePillarH - 10,
                craneCaptureY: prev.craneCaptureY - 10,
              }));
            }, 10);
          }, 2000);
        } else {
          setCraneState((prev) => ({
            ...prev,
            cranePillarH: prev.cranePillarH + 10,
            craneCaptureY: prev.craneCaptureY + 10,
          }));
        }
      }, 10);
      return () => {
        clearInterval(intervalDown);
      };
    }
  }, [craneState.cranePillarH, isCaptured]);

  useEffect(() => {
    let intervalId;
    const handlePressStart = () => {
      intervalId = setInterval(() => {
        if (
          pressed.direction === "left" &&
          craneState.craneCaptureX >= 130 &&
          isCaptured === false
        ) {
          setCraneState((prev) => ({
            ...prev,
            cranePillarX: prev.cranePillarX - 1,
            craneCaptureX: prev.craneCaptureX - 1,
          }));
        } else if (
          pressed.direction === "right" &&
          craneState.craneCaptureX <= 644 &&
          isCaptured === false
        ) {
          setCraneState((prev) => ({
            ...prev,
            cranePillarX: prev.cranePillarX + 1,
            craneCaptureX: prev.craneCaptureX + 1,
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
  }, [craneState.craneCaptureX, isCaptured, pressed]);

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
