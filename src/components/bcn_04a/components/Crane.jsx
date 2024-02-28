import classes from "../styles/bcn_04a.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import craneCaptureImg from "../assets/crane_capture.png";
import craneCaptureDone from "../assets/crane_capture_done.png";
import { numberToPx } from "../../../utils/converter";
export default function Crane({
  isPressLeft,
  isPressCapture,
  isPressRight,
  onDoneCapture,
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
    let intervalDown;
    let intervalUp;
    if (isPressCapture && captureState === "down") {
      intervalDown = setInterval(() => {
        setCraneState((prev) => ({
          ...prev,
          cranePillarH: prev.cranePillarH + 10,
          craneCaptureY: prev.craneCaptureY + 10,
        }));
      }, 10);
      const timeout = setTimeout(() => {
        clearInterval(intervalDown);
        setTimeout(() => {
          craneCapture.current.src = craneCaptureDone;
          setCaptureState("up");
        }, 500);
      }, 500);
      return () => clearTimeout(timeout);
    }

    if (isPressCapture && captureState === "up") {
      intervalUp = setInterval(() => {
        setCraneState((prev) => ({
          ...prev,
          cranePillarH: prev.cranePillarH - 10,
          craneCaptureY: prev.craneCaptureY - 10,
        }));
      }, 10);
      setTimeout(() => {
        clearInterval(intervalUp);
        setTimeout(() => {
          setCaptureState("done");
          onDoneCapture("yey");
        }, 500);
      }, 500);
    }
    return () => {
      clearInterval(intervalDown);
    };
  }, [captureState, isPressCapture, onDoneCapture]);

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
