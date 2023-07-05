import React, { useState } from "react";
import "./NewBookButton.css";
import NewBookForm from "../NewBookForm/NewBookForm";


const NewBookButton = ({ onBookAdded }) => {
    const [showForm, setShowForm] = useState(false);
  
    const onBookAddedHandler = (book) => {
      // Aquí puedes realizar cualquier acción adicional después de agregar el libro
      onBookAdded(book);
      setShowForm(false); // Oculta el formulario después de agregar el libro
    };
  
    const showBookForm = () => {
      setShowForm(true);
    };
  
    const hideBookForm = () => {
      setShowForm(false);
    };
  
    return (
      <div className="add-admin">
        {showForm ? (
          <NewBookForm onHideForm={hideBookForm} onBookAdded={onBookAddedHandler} />
        ) : (
          <button onClick={showBookForm}>New book</button>
        )}
      </div>
    );
  };
  
  export default NewBookButton;