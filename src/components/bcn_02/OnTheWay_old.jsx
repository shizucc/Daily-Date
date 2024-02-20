import { useEffect, useRef, useState } from "react";
import classes from "./styles/bcn_02.module.css";
import motorNoSmoke from "../../assets/global/img/motor_no_smoke.png";
export default function OnTheWay() {
  const canvasRef = useRef();

  const [motorPositionX, setMotorIntervalX] = useState(900);

  setInterval(() => {
    setMotorIntervalX((prev) => prev - 5);
  }, 500);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const gameWidth = 1080;
    const gameHeight = 1920;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const scaleX = screenWidth / gameWidth;
    const scaleY = screenHeight / gameHeight;

    canvas.width = gameWidth * Math.min(scaleX, scaleY);
    canvas.height = gameHeight * Math.min(scaleX, scaleY);

    ctx.scale(canvas.width / gameWidth, canvas.height / gameHeight);

    const spriteImage = new Image();
    spriteImage.src = motorNoSmoke;

    function drawSprite() {
      ctx.drawImage(spriteImage, motorPositionX, 1450, 300, 300);

      requestAnimationFrame(drawSprite);
    }
    const animationFrame = requestAnimationFrame(drawSprite);
    console.log(scaleX);
    return () => cancelAnimationFrame(animationFrame);
  }, [motorPositionX]);
  return <canvas className={classes.background} ref={canvasRef}></canvas>;
}
