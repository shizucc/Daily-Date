import { useEffect } from "react";
import Motor from "../global_components/Motor";
import classes from "./styles/bcn_06.module.css";
export default function OnTheWayNight({ toNextPage }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      toNextPage("bcn_07");
    }, 3500);

    return () => {
      clearTimeout(timeout);
    };
  }, [toNextPage]);
  return (
    <div className={classes.canvas}>
      <Motor isBoost={true} />0
    </div>
  );
}
