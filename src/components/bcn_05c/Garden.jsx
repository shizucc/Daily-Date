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
};
const DIALOG_SCRIPT = {
  script0: {
    question: "mau denger gaa?",
    answers: ["Mau", "apatuh"],
  },
  script1: {
    question: "lanjutin...",
    answers: ["Mari kita nge-", "Bass kubetot"],
  },
  script2: {
    question: "mw pulang!",
    answers: ["gmw", "maunya bareng terus sama kamu"],
  },
  script3: {
    question: "...",
    answers: ["...", "okaii"],
  },
};
export default function Garden() {
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
  const handleShowDialogChoices = useCallback(
    function handleShowDialogChoices() {
      "Hello";
      if (dialogResponse == RESPONSE_DIALOG_SCRIPT.response0) {
        setDialog(DIALOG_SCRIPT.script0);
      }
    },
    [dialogResponse]
  );

  return (
    <div className={classes.canvas}>
      <RunningResponseDialog
        script={dialogResponse}
        onComplete={handleShowDialogChoices}
      />
      {dialog && <Dialog question={dialog.question} />}
    </div>
  );
}
