import classes from "./styles/bcn_03a.module.css";
import book1Img from "./assets/imas.jpg";
import book2Img from "./assets/naruto.jpg";
import book3Img from "./assets/record-of-ragnarok.jpg";
import book4Img from "./assets/sakura-trick.jpg";
import book5Img from "./assets/yona.jpg";
import book6Img from "./assets/bl.jpg";
import Book from "./components/Book";
import { useEffect, useState } from "react";
import DialogResponse from "../bcn_02/components/DialogResponse";

const DIALOG_RESPONSE_SCRIPT = [
  "Liat-Liat Komik dulu yuk!",
  "Kamu jangan nyari yang aneh-aneh ya!",
  "Terutama BL!",
  "Kalo dah bosen bilang ya!",
];
export default function Gramedia() {
  const [dialogResponseIndex, setDialogResponseIndex] = useState(0);

  useEffect(() => {
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDialogResponseIndex((prev) => {
          if (prev === DIALOG_RESPONSE_SCRIPT.length - 1) {
            clearInterval(interval);
            return prev;
          } else {
            return prev + 1;
          }
        });
      }, 4000);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);
  function handleSelectBook(book) {
    console.log(book);
  }
  return (
    <div className={classes.canvas}>
      <DialogResponse
        dialogText={DIALOG_RESPONSE_SCRIPT[dialogResponseIndex]}
      />
      <div className={classes.books}>
        <Book
          img={book1Img}
          posX={100}
          posY={670}
          onSelect={handleSelectBook}
        />
        <Book
          img={book2Img}
          posX={100}
          posY={925}
          onSelect={handleSelectBook}
        />
        <Book
          img={book3Img}
          posX={100}
          posY={1175}
          onSelect={handleSelectBook}
        />
        <Book
          img={book4Img}
          posX={870}
          posY={670}
          onSelect={handleSelectBook}
        />
        <Book
          img={book5Img}
          posX={870}
          posY={925}
          onSelect={handleSelectBook}
        />
        <Book
          img={book6Img}
          posX={870}
          posY={1175}
          onSelect={handleSelectBook}
        />
      </div>
    </div>
  );
}
