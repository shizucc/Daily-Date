import classes from "../styles/bcn_04a.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import craneCaptureImg from "../assets/crane_capture.png";
import { numberToPx } from "../../../utils/converter";
export default function Crane({
  isPressLeft,
  isPressCapture,
  isPressRight,
  isDoneCapture,
}) {
  const craneCapture = useRef();
  const cranePillar = useRef();
  const [craneState, setCraneState] = useState({
    cranePillarX: 480,
    cranePillarH: 100,
    craneCaptureX: 357,
    craneCaptureY: 490,
  });

  const [captureState, setCaptureState] = useState("down");

  useEffect(() => {
    cranePillar.current.style.height = numberToPx(craneState.cranePillarH);
    cranePillar.current.style.left = numberToPx(craneState.cranePillarX);
    craneCapture.current.style.left = numberToPx(craneState.craneCaptureX);
    craneCapture.current.style.top = numberToPx(craneState.craneCaptureY);
  }, [craneState]);

  useEffect(() => {
    if (isPressCapture) {
      const intervalDown = setInterval(() => {
        setCraneState((prev) => ({
          ...prev,
          cranePillarH: prev.cranePillarH + 1,
          craneCaptureY: prev.craneCaptureY + 1,
        }));
      }, 80);
    }
  }, [craneState.cranePillarH, isPressCapture]);

  useEffect(() => {
    let intervalId;
    const handlePressStart = () => {
      intervalId = setInterval(() => {
        if (
          isPressLeft &&
          craneState.craneCaptureX >= 130 &&
          isPressCapture === false
        ) {
          setCraneState((prev) => ({
            ...prev,
            cranePillarX: prev.cranePillarX - 1,
            craneCaptureX: prev.craneCaptureX - 1,
          }));
        } else if (
          isPressRight &&
          craneState.craneCaptureX <= 644 &&
          isPressCapture === false
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

    if (isPressLeft || isPressRight) {
      handlePressStart();
    } else {
      handlePressEnd();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [craneState.craneCaptureX, isPressCapture, isPressLeft, isPressRight]);
  return (
    <section className={classes.craneContainer}>
      <div ref={cranePillar} className={classes.cranePillar}></div>
      <img
        ref={craneCapture}
        className={classes.craneCapture}
        src={craneCaptureImg}
        alt="crane_img"
      />
    </section>
  );
}
