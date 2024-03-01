import classes from "./styles/bcn_03a.module.css";
import Book from "./components/Book";
import { useEffect, useState } from "react";
import DialogResponse from "../global_components/DialogResponse";
import Modal from "../global_components/Modal";
import { BOOKS } from "./books";

const DIALOG_RESPONSE_SCRIPT = [
  "Liat-Liat Komik dulu yuk!",
  "Kamu jangan nyari yang aneh-aneh ya!",
  "Terutama BL!",
  "Kalo dah bosen bilang ya!",
];

export default function Gramedia({ toNextPage }) {
  const [dialogResponseIndex, setDialogResponseIndex] = useState(0);
  const [bookModal, setBookModal] = useState({
    isOpen: false,
    bookIndex: 0,
  });
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
  function handleSelectBook(bookIndex) {
    console.log(bookIndex);
    setBookModal({ isOpen: true, bookIndex: bookIndex });
  }

  function handleCloseBookModal() {
    setBookModal((prev) => ({ ...prev, isOpen: false }));
  }
  return (
    <div className={classes.canvas}>
      <Modal open={bookModal.isOpen} onClose={handleCloseBookModal}>
        <article className={classes.bookModal}>
          <img src={BOOKS[bookModal.bookIndex].coverImage} alt="book_cover" />
          <section>
            <h3>{BOOKS[bookModal.bookIndex].title}</h3>
            <p>{BOOKS[bookModal.bookIndex].description}</p>
            <button onClick={handleCloseBookModal}>Baca Lainnya</button>
          </section>
        </article>
      </Modal>
      <DialogResponse
        dialogText={DIALOG_RESPONSE_SCRIPT[dialogResponseIndex]}
      />
      <div className={classes.books}>
        <Book
          img={BOOKS[0].coverImage}
          posX={100}
          posY={670}
          onClick={() => handleSelectBook(0)}
        />
        <Book
          img={BOOKS[1].coverImage}
          posX={100}
          posY={925}
          onClick={() => handleSelectBook(1)}
        />
        <Book
          img={BOOKS[2].coverImage}
          posX={100}
          posY={1175}
          onClick={() => handleSelectBook(2)}
        />
        <Book
          img={BOOKS[3].coverImage}
          posX={870}
          posY={670}
          onClick={() => handleSelectBook(3)}
        />
        <Book
          img={BOOKS[4].coverImage}
          posX={870}
          posY={925}
          onClick={() => handleSelectBook(4)}
        />
        <Book
          img={BOOKS[5].coverImage}
          posX={870}
          posY={1175}
          onClick={() => handleSelectBook(5)}
        />
      </div>

      <button
        className={classes.timezoneButton}
        onClick={() => toNextPage("bcn_04a")}
      >
        Ke <br /> TimeZone
      </button>
    </div>
  );
}
