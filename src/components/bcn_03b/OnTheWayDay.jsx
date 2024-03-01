import classes from "./styles/bcn_03b.module.css";
import Clouds from "../global_components/Clouds.jsx";
import Motor from "../global_components/Motor.jsx";
import Dialog from "../global_components/Dialog.jsx";
import { useState } from "react";
import DialogResponse from "../global_components/DialogResponse.jsx";
const DIALOG_SCRIPT = {
  initialQuestion: {
    question: "Mau Kemana",
    answers: ["RSM", "Makan Seblak", "Taman Mas Kemambang"],
  },
};

export default function OnTheWayDay({ toNextPage }) {
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
      setIsMotorBoost(true);
      setDialogResponse("Ayo Gas!");
      toNextPage("bcn_04b");
    } else if (answer === "Taman Mas Kemambang") {
      setDialogResponse("Nanti aja kalo udah sore");
      const timeout = setTimeout(() => {
        setDialogResponse(null);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }
  return (
    <div className={classes.canvas}>
      <Clouds />
      <Dialog
        question={DIALOG_SCRIPT.initialQuestion.question}
        answers={DIALOG_SCRIPT.initialQuestion.answers}
        onSelectAnswer={handleSelectAnswer}
      />
      <DialogResponse dialogText={dialogResponse} />
      <Motor isBoost={isMotorBoost} />
    </div>
  );
}
