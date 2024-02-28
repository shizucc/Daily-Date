import classes from "./styles/bcn_02.module.css";

import Motor from "./components/Motor";
import Clouds from "./components/Clouds";
import Dialog from "../global_components/Dialog";
import DialogResponse from "../global_components/DialogResponse";
import { useEffect, useState } from "react";

const DIALOG_SCRIPT = {
  initialQuestion: {
    question: "Mau Kemana",
    answers: ["RSM", "Makan Seblak", "Taman Mas Kemambang"],
  },
};

export default function OnTheWay({ toNextPage }) {
  const [dialogResponse, setDialogResponse] = useState(null);
  const [isMotorBoost, setIsMotorBoost] = useState(false);

  function handleSelectAnswer(answer) {
    if (answer === "RSM") {
      setDialogResponse("Ayo Gas!");
      setIsMotorBoost(true);
      toNextPage("bcn_03a");
    } else if (answer === "Makan Seblak") {
      setDialogResponse("Masih pagi tau! Nanti perut kamu sakit");
      const timeout = setTimeout(() => {
        setDialogResponse(null);
      }, 5000);
      return () => clearTimeout(timeout);
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
      <Dialog
        question={DIALOG_SCRIPT.initialQuestion.question}
        answers={DIALOG_SCRIPT.initialQuestion.answers}
        onSelectAnswer={handleSelectAnswer}
      />
      <DialogResponse dialogText={dialogResponse} />
      <Clouds />
      <Motor isBoost={isMotorBoost} />
    </div>
  );
}
