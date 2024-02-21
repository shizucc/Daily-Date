/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import classes from "../styles/bcn_02.module.css";
import cloud1Image from "../../../assets/global/img/cloud_1.png";
import cloud2Image from "../../../assets/global/img/cloud_2.png";
import { numberToPx } from "../../../utils/converter";

export default function Cloud({ initialPosX, initialPosY, moveSpeed }) {
  const cloud = useRef();
  const [posX, setPosX] = useState(initialPosX);

  useEffect(() => {
    if (posX <= -500) {
      setPosX(1100);
    }
    cloud.current.style.left = numberToPx(posX);
    const forwardInterval = setInterval(() => {
      setPosX((prev) => prev - moveSpeed);
    }, 5);

    return () => {
      clearInterval(forwardInterval);
    };
  }, [posX, moveSpeed]);

  useEffect(() => {
    const randomVal = Math.random();
    const cloudChoice = randomVal < 0.5 ? cloud1Image : cloud2Image;
    cloud.current.src = cloudChoice;

    cloud.current.style.top = numberToPx(initialPosY);
    cloud.current.style.left = numberToPx(initialPosX);
  }, [initialPosX, initialPosY]);
  return <img ref={cloud} className={classes.cloud} alt="" />;
}
