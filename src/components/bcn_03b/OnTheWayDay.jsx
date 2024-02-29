import classes from "./styles/bcn_03b.module.css";
import Clouds from "../global_components/Clouds.jsx";
import Motor from "../global_components/Motor.jsx";
import Dialog from "../global_components/Dialog.jsx";
export default function OnTheWayDay() {
  return (
    <div className={classes.canvas}>
      <Clouds />
      <Dialog />
      <Motor isBoost={false} />
    </div>
  );
}
