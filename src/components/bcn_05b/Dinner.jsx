import { useEffect } from "react";
import classes from "./styles/bcn_05b.module.css";
export default function Dinner({ toNextPage }) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      toNextPage("bcn_03c");
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [toNextPage]);
  return (
    <div className={classes.canvas}>
      <section>
        <h1>Nida pun Makan dengan lahap</h1>
      </section>
    </div>
  );
}
