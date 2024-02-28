import { useEffect, useState } from "react";
import DialogResponse from "../../bcn_02/components/DialogResponse";

export default function RunningResponseDialog({ script, onComplete }) {
  const [dialogResponseIndex, setDialogResponseIndex] = useState(0);
  console.log(script[dialogResponseIndex]);
  useEffect(() => {
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDialogResponseIndex((prev) => {
          if (prev === script.length - 1) {
            clearInterval(interval);
            onComplete();
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
  }, [script]);

  return <DialogResponse dialogText={script[dialogResponseIndex]} />;
}
