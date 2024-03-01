import classes from "./styles/bcn_04c.module.css";
import spreadButton from "./assets/spread_button.png";
import bucket0Img from "./assets/pur_kosong.png";
import bucket1Img from "./assets/pur_sedikit.png";
import bucket2Img from "./assets/pur_sedang.png";
import bucket3Img from "./assets/pur_penuh.png";
import snackImg from "./assets/snack.png";

import { useEffect, useRef, useState } from "react";
import DialogResponse from "../global_components/DialogResponse";
import Fishes from "./components/Fishes";
import Snack from "./components/Snack";
import NextPageButton from "../global_components/NextPageButton";

const RESPONSE_DIALOG_SCRIPT = [
  "kayanya dah pada kenyang deh",
  "Nidaaa lempar yang bener coba",
  "Gaada yang makan awokwkwk",
];

export default function FeedFish({ toNextPage }) {
  const [dialogResponse, setDialogResponse] = useState();
  const [feedInBucket, setFeedInBucket] = useState(3);
  const bucket = useRef();
  useEffect(() => {
    const bucketList = [bucket0Img, bucket1Img, bucket2Img, bucket3Img];
    bucket.current.src = bucketList[feedInBucket];
  }, [feedInBucket]);

  useEffect(() => {
    addDialogToDialogResponse("Nida seneng banget deh kasih makan ikan", true);
  }, []);

  function handleFeed() {
    if (feedInBucket > 0) {
      setFeedInBucket((prev) => prev - 1);
      const timeout = setTimeout(() => {
        addDialogToDialogResponse(
          RESPONSE_DIALOG_SCRIPT[feedInBucket - 1],
          true
        );
      }, 3000);
      return () => clearTimeout(timeout);
    } else {
      addDialogToDialogResponse("Udah Habis, mau ke sana ga?", true);
    }
  }

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
  return (
    <div className={classes.canvas}>
      <div style={{ zIndex: 3 }}>
        <DialogResponse dialogText={dialogResponse} />
      </div>
      <div className={classes.waterFilter}>
        <div className={classes.water}></div>
      </div>
      <div className={classes.snacks}>
        {feedInBucket < 3 && <Snack posX={300} posY={700} />}
        {feedInBucket < 2 && <Snack posX={500} posY={500} />}
        {feedInBucket < 1 && <Snack posX={400} posY={200} />}
      </div>
      <Fishes />

      <section className={classes.feedControl}>
        <img
          src={spreadButton}
          className={classes.spreadButton}
          alt="button_img"
          onClick={handleFeed}
        />
        <img ref={bucket} className={classes.bucket} alt="bucket_img" />
      </section>
      <NextPageButton
        title={"Taman Bunga"}
        onClick={() => toNextPage("bcn_05c")}
      />
    </div>
  );
}
