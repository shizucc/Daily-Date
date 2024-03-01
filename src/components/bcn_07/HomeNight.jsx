import { useEffect, useState } from "react";
import Motor from "../global_components/Motor";
import RunningResponseDialog from "../global_components/RunningResponeDialog";
import classes from "./styles/bcn_07.module.css";
import Dialog from "../global_components/Dialog";
const RESPONSE_DIALOG_SCRIPT = [
  "Makasii buat ngedate hari ini!",
  "Aku sayang kamu Nida",
  "Minggu depan ayo ngedate lagi!",
  "Udah yaa, jangan tidur kemaleman",
  "Dadahhh!",
  "...",
];

const DIALOG_SCRIPT = {
  question: "Mau ngedate lagi?",
  answers: ["Apasih yang engga buat kamu", "Mana mungkin aku nolak"],
};
export default function HomeNight({ toNextPage }) {
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
    setIsBoost(true);
    setDialog(DIALOG_SCRIPT);
  }

  function handleRestartGame() {
    toNextPage("bcn_01");
  }
  return (
    <div className={classes.canvas}>
      {dialog != null ? (
        <Dialog
          question={DIALOG_SCRIPT.question}
          answers={DIALOG_SCRIPT.answers}
          onSelectAnswer={handleRestartGame}
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

      <Motor isBoost={isBoost} />
    </div>
  );
}
