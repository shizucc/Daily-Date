import { createPortal } from "react-dom";
import classes from "../styles/bcn_02.module.css";
export default function Dialog() {
  return createPortal(
    <div className={classes.choicesBox}>
      <h2>Mau Kemana ?</h2>
      <button>RSM</button>
      <button>Makan Seblak</button>
      <button>Taman Mas Kemambang</button>
    </div>,
    document.getElementById("root")
  );
}
