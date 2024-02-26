import { useEffect, useRef } from "react";
import classes from "../styles/bcn_03a.module.css";
import { numberToPx } from "../../../utils/converter";
export default function Book({ img, posX, posY, onSelect }) {
  const book = useRef();

  useEffect(() => {
    book.current.style.top = numberToPx(posY);
    book.current.style.left = numberToPx(posX);
  }, [posX, posY]);
  return (
    <img
      ref={book}
      className={classes.book}
      src={img}
      onClick={() => onSelect(img)}
      alt="book"
    ></img>
  );
}
