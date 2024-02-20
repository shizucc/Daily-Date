import classes from "../styles/bcn_02.module.css";
import motorNoSmokeImage from "../../../assets/global/img/motor_no_smoke.png";
import motorWithSmokeImage from "../../../assets/global/img/motor_with_smoke.png";
import { useEffect, useRef, useState } from "react";
export default function Motor() {
  const motor = useRef();
  const [motorState, setMotorState] = useState({
    image: motorWithSmokeImage,
    positionX: 1000,
    stop: false,
    speed: 0.5,
  });
  useEffect(() => {
    motor.current.classList.add(classes.vibrate);
    if (!motorState.stop) {
      motor.current.style.left = `${Math.round(motorState.positionX)}px`;
    }
    const forwardInterval = setInterval(() => {
      setMotorState((prev) => ({
        ...prev,
        positionX: prev.positionX - prev.speed,
      }));
    }, 10);

    if (motorState.positionX <= 300) {
      setMotorState((prev) => ({ ...prev, stop: true }));
      clearInterval(forwardInterval);
    }

    return () => {
      clearInterval(forwardInterval);
    };
  }, [motorState.positionX, motorState.stop]);

  useEffect(() => {
    motor.current.src = motorState.image;
    const smokeInterval = setInterval(() => {
      console.log("smoke");
      setMotorState((prev) => ({
        ...prev,
        image:
          prev.image === motorWithSmokeImage
            ? motorNoSmokeImage
            : motorWithSmokeImage,
      }));
    }, 2000);
    return () => {
      clearInterval(smokeInterval);
    };
  }, [motorState.image]);

  return <img ref={motor} className={classes.motor} alt="" />;
}
