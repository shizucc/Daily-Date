import classes from "./styles/bcn_04a.module.css";
import pressButton from "./assets/press_button.png";
import { PRESENTS } from "./presents";
import { DIALOG_RESPONSE_SCRIPT } from "./response_dialog_script";
import dollsImg from "./assets/dolls.png";
import { useState, useCallback, useMemo } from "react";
import Crane from "./components/Crane";
import Modal from "../global_components/Modal";
import { getRandomItemFromList } from "./util";
import RunningResponseDialog from "../global_components/RunningResponeDialog";

export default function Timezone({ toNextPage }) {
  let present = useMemo(() => getRandomItemFromList(PRESENTS), []);
  const [isOpenNextPageButton, setIsOpenNextPageButton] = useState(false);
  const [isOpenPresentDialog, setIsOpenPresentDialog] = useState(false);
  const [responseScript, setResponseScript] = useState([]);
  const [pressed, setPressed] = useState({
    direction: "left",
    isPress: false,
  });

  const [isCaptured, setIsCaptured] = useState("not");

  const handleDoneCapture = useCallback(
    function handleDoneCapture() {
      if (present === PRESENTS[0]) {
        setResponseScript(DIALOG_RESPONSE_SCRIPT.bl);
      } else if (present === PRESENTS[1]) {
        setResponseScript(DIALOG_RESPONSE_SCRIPT.watch);
      } else if (present === PRESENTS[2]) {
        setResponseScript(DIALOG_RESPONSE_SCRIPT.dool);
      }
      setIsCaptured("done");
      setIsOpenPresentDialog(true);
    },
    [present]
  );

  return (
    <div className={classes.canvas}>
      {isCaptured === "done" && (
        <RunningResponseDialog
          script={responseScript}
          onComplete={() => {
            setIsOpenNextPageButton(true);
          }}
        />
      )}
      <Modal isOpen={isOpenPresentDialog}>
        <article className={classes.presentModal}>
          <img src={present.image} alt="present" />
          <section>
            <h1>SELAMAT! KAMU MENDAPATKAN :</h1>
            <h3>{present.title}</h3>
            <p>{present.description}</p>
            {isOpenNextPageButton && (
              <button
                onClick={() => {
                  setIsOpenPresentDialog(false);
                  toNextPage("bcn_03b");
                }}
              >
                AYO
              </button>
            )}
          </section>
        </article>
      </Modal>
      <Crane
        isPressLeft={
          pressed.direction === "left" &&
          pressed.isPress &&
          isCaptured === "not"
        }
        isPressCapture={isCaptured === "progress"}
        isPressRight={
          pressed.direction === "right" &&
          pressed.isPress &&
          isCaptured === "not"
        }
        onDoneCapture={handleDoneCapture}
      />
      <section className={classes.dollsContainer}>
        <img className={classes.dolls} src={dollsImg} alt="" />
      </section>
      <section className={classes.buttons}>
        {/* <img
          className={classes.btnLeft}
          src={leftButton}
          alt="btn_left"
          onMouseDown={() => setPressed({ direction: "left", isPress: true })}
          onMouseUp={() => setPressed({ direction: "left", isPress: false })}
          onMouseLeave={() => setPressed({ direction: "left", isPress: false })}
        /> */}
        <img
          className={classes.btnPress}
          onClick={() => setIsCaptured("progress")}
          src={pressButton}
          alt="btn_press"
        />
        {/* <img
          className={classes.btnRight}
          src={rightButton}
          alt="btn_right"
          onMouseDown={() => setPressed({ direction: "right", isPress: true })}
          onMouseUp={() => setPressed({ direction: "right", isPress: false })}
          onMouseLeave={() =>
            setPressed({ direction: "right", isPress: false })
          }
        /> */}
      </section>
    </div>
  );
}
