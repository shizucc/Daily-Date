import classes from "./styles/bcn_02.module.css";

import Motor from "./components/Motor";
import Clouds from "./components/Clouds";
import Dialog from "./components/Dialog";
import DialogResponse from "./components/DialogResponse";
import { useEffect, useState } from "react";

const DIALOG_SCRIPT = {
  initialQuestion: {
    question: "Mau Kemana",
    answers: ["RSM", "Makan Seblak", "Taman Mas Kemambang"],
  },
};

export default function OnTheWay({ toNextPage }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [dialogResponse, setDialogResponse] = useState(null);
  const [isMotorBoost, setIsMotorBoost] = useState(false);
  function handleSelectAnswer(answer) {
    setSelectedAnswer(answer);
  }

  useEffect(() => {
    if (selectedAnswer === "RSM") {
      setDialogResponse("Ayo Gas!");
      setIsMotorBoost(true);
      toNextPage("bcn_03a");
    } else if (selectedAnswer === "Makan Seblak") {
      setDialogResponse("Masih pagi tau! Nanti perut kamu sakit");
    } else if (selectedAnswer === "Taman Mas Kemambang") {
      setDialogResponse("Nanti aja kalo udah sore");
    }
  }, [selectedAnswer, toNextPage]);

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
