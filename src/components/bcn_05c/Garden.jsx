import { useCallback, useEffect, useState } from "react";
import classes from "./styles/bcn_05c.module.css";
import DialogResponse from "../global_components/DialogResponse";
import RunningResponseDialog from "../global_components/RunningResponeDialog";
import Dialog from "../global_components/Dialog";

const RESPONSE_DIALOG_SCRIPT = {
  response0: [
    "Bjr pengalnya, energi Nida banyak banget deh",
    "Btw Aku punya tebak-tebakkan nih",
    "Gitar Kupetik, bass kubetot",
    "Hai Nona cantik",
  ],
  response1: [
    "Nida gaboleh gitu",
    "Cewek tuh harus anggun",
    "Btw udah sore banget nih, keknya udahan dulu buat hari ini",
  ],
  response2: [
    "kaburrr",
    "eh maksudnya AK JG MW",
    "Tapi besok-besok lagi aja ya ngedatenya",
  ],
  response3: [
    "-_-",
    "Nida tidak asik",
    "Btw udah sore banget nih, keknya udahan dulu buat hari ini",
  ],
};
const DIALOG_SCRIPT = {
  script0: {
    question: "lanjutin...",
    answers: ["Mari kita nge-", "Bass kubetot"],
  },
  script1: {
    question: "mw pulang?",
    answers: ["gmw", "maunya bareng terus sama kamu"],
  },
  script2: {
    question: "...",
    answers: ["...", "okaii"],
  },
};
export default function Garden({ toNextPage }) {
  const [dialogResponse, setDialogResponse] = useState(
    RESPONSE_DIALOG_SCRIPT.response0
  );
  const [dialog, setDialog] = useState(null);
  function addDialogToDialogResponse(text, isTimeout) {
    setDialogResponse(text);
    let timeout;
    if (isTimeout) {
      timeout = setTimeout(() => {
        setDialogResponse(null);
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }

  function handleShowDialogChoices() {
    if (dialogResponse == RESPONSE_DIALOG_SCRIPT.response0) {
      setDialog(DIALOG_SCRIPT.script0);
    } else if (
      dialogResponse == RESPONSE_DIALOG_SCRIPT.response1 ||
      dialogResponse == RESPONSE_DIALOG_SCRIPT.response3
    ) {
      setDialog(DIALOG_SCRIPT.script1);
    } else {
      toNextPage("bcn_06");
    }
  }

  function handleSelectAnswer(answer) {
    setDialog(null);

    if (answer === DIALOG_SCRIPT.script0.answers[0]) {
      setDialogResponse(RESPONSE_DIALOG_SCRIPT.response1);
    } else if (answer === DIALOG_SCRIPT.script0.answers[1]) {
      setDialogResponse(RESPONSE_DIALOG_SCRIPT.response3);
    } else if (
      answer === DIALOG_SCRIPT.script1.answers[0] ||
      DIALOG_SCRIPT.script1.answers[1]
    ) {
      setDialogResponse(RESPONSE_DIALOG_SCRIPT.response2);
    }
  }

  return (
    <div className={classes.canvas}>
      {dialogResponse !== null ? (
        <RunningResponseDialog
          key={dialogResponse}
          script={dialogResponse}
          onComplete={() => {
            handleShowDialogChoices();
          }}
        />
      ) : null}
      {dialog && (
        <Dialog
          question={dialog.question}
          answers={dialog.answers}
          onSelectAnswer={handleSelectAnswer}
        />
      )}
    </div>
  );
}
