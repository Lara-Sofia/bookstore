import React, { useState } from "react";
import { db } from "../../firebase/configDB";

const NewBookForm = ({ onHideForm, onBookAdded }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo documento en la colección "books"
    db.collection("books")
      .add({
        title,
        author,
        pages,
        description,
        image,
      })
      .then(() => {
        alert("Libro agregado a Firebase");
        onHideForm(); // Ocultar el formulario después de agregar el libro
      })
      .catch((error) => {
        alert("Error al agregar el libro a Firebase", error);
      });
  };

  return (
    <div>
      <h2>New Book Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <label>
          Pages:
          <input type="number" value={pages} onChange={(e) => setPages(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </label>
        <button type="submit">Add Book</button>
        <button type="button" onClick={onHideForm}>Cancel</button>
      </form>
    </div>
  );
};

export default NewBookForm;