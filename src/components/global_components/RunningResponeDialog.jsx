import { useEffect, useState } from "react";
import DialogResponse from "./DialogResponse";

export default function RunningResponseDialog({ script, onComplete }) {
  const [dialogResponseIndex, setDialogResponseIndex] = useState(0);

  useEffect(() => {
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDialogResponseIndex((prev) => {
          if (prev === script.length - 1) {
            onComplete();
            clearInterval(interval);
            clearTimeout(timeout);
            return prev;
          } else {
            return prev + 1;
          }
        });
      }, 2000);
    }, 4000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [onComplete, script]);

  return <DialogResponse dialogText={script[dialogResponseIndex]} />;
}
