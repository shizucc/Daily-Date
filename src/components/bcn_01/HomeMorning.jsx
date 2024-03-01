import { useEffect, useState } from "react";
import Motor from "../global_components/Motor";
import RunningResponseDialog from "../global_components/RunningResponeDialog";
import classes from "./styles/bcn_01.module.css";
import Dialog from "../global_components/Dialog";
import Clouds from "../global_components/Clouds";
const RESPONSE_DIALOG_SCRIPT = ["Nidaaa Ayo Ngedate!"];

const DIALOG_SCRIPT = {
  question: "mmw ngedate g",
  answers: ["Gas", "ayo sayangggg"],
};
export default function HomeMorning({ toNextPage }) {
  const [responseScript, setResponseScript] = useState(null);
  const [dialog, setDialog] = useState(null);
  const [isBoost, setIsBoost] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setResponseScript(RESPONSE_DIALOG_SCRIPT);
    }, 14000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function handleEnd() {
    setDialog(DIALOG_SCRIPT);
  }

  function handleStartGame() {
    toNextPage("bcn_02");
    setIsBoost(true);
  }
  return (
    <div className={classes.canvas}>
      {dialog != null ? (
        <Dialog
          question={DIALOG_SCRIPT.question}
          answers={DIALOG_SCRIPT.answers}
          onSelectAnswer={handleStartGame}
        />
      ) : null}
      {responseScript != null ? (
        <RunningResponseDialog
          script={responseScript}
          onComplete={() => {
            handleEnd();
          }}
        />
      ) : null}
      <Clouds />
      <Motor isBoost={isBoost} />
    </div>
  );
}
