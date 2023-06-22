import { useState } from "react";

import "./BookItems.css";

import DateRead from "../ReadDate/ReadDate";
import BookCard from "../Card/Card";

const BookItem = ({ bookTitle, bookAuthor, bookDateRead, bookPageCount }) => {
  const [title, setTitle] = useState(bookTitle);

  const changeTitleHandler = () => {
    setTitle("Actualizado!");
    console.log(title);
  };

  return (
    <BookCard>
      <h2>{title}</h2>
      <h3>{bookAuthor}</h3>
      <DateRead bookDateRead={bookDateRead} />
      <p>{bookPageCount} páginas</p>
      <button onClick={changeTitleHandler}>Cambiar titulo</button>
    </BookCard>
  );
};

export default BookItem;