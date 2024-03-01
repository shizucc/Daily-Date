import { useState } from "react";
import Birds from "../global_components/Birds";
import Dialog from "../global_components/Dialog";
import Motor from "../global_components/Motor";
import classes from "./styles/bcn_03c.module.css";
import DialogResponse from "../global_components/DialogResponse";
const DIALOG_SCRIPT = {
  initialQuestion: {
    question: "Mau Kemana",
    answers: ["RSM", "Makan Seblak", "Taman Mas Kemambang"],
  },
};

export default function OnTheWayAfternoon({ toNextPage }) {
  const [dialogResponse, setDialogResponse] = useState(null);
  const [isMotorBoost, setIsMotorBoost] = useState(false);

  function handleSelectAnswer(answer) {
    if (answer === "RSM") {
      setDialogResponse("Kan tadi udah");
      const timeout = setTimeout(() => {
        setDialogResponse(null);
      }, 5000);
      return () => clearTimeout(timeout);
    } else if (answer === "Makan Seblak") {
      setDialogResponse("Kamu belum kenyang ya?");
      const timeout = setTimeout(() => {
        setDialogResponse(null);
      }, 5000);
      return () => clearTimeout(timeout);
    } else if (answer === "Taman Mas Kemambang") {
      setIsMotorBoost(true);
      setDialogResponse("Ayo Gas!");
      toNextPage("bcn_04c");
    }
  }
  return (
    <div className={classes.canvas}>
      <DialogResponse dialogText={dialogResponse} />
      <Dialog
        question={DIALOG_SCRIPT.initialQuestion.question}
        answers={DIALOG_SCRIPT.initialQuestion.answers}
        onSelectAnswer={handleSelectAnswer}
      />
      <Birds />
      <Motor isBoost={isMotorBoost} />
    </div>
  );
}
