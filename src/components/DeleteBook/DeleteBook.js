import "./DeleteBookButton.css";
import BookForm from "../BookForm/BookForm";
import { useState } from "react";

const DeleteBookButton = ({ onBookAdded }) => {
  const [showForm, setShowForm] = useState(false);

  const onBookAddedHandler = (book) => {
    console.log(book);
    console.log("In new Book");
    onBookAdded(book);
  };
  const showBookForm = () => {
    setShowForm(true);
  }

  const hideBookForm = () => {
    setShowForm(false);
  };
  return (
    <div className="delete-book">
      {showForm ? (
        <BookForm onHideForm={hideBookForm} onBookAdded={onBookAddedHandler} />
      ) : (
        <button onClick={showBookForm}>Eliminar libro</button>
      )}
    </div>
  );
};

export default DeleteBookButton;