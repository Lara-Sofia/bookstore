import React, {useState} from "react";
import {db} from "../../firebase/config";

const BookForm = () => {
  // Declara los estados para cada campo del formulario
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  // Función para enviar los datos a Firebase
  const sendDataToFireBase = () => {
    // Crea un objeto con los datos del libro
    const bookData = {
      title: title,
      author: author,
      pages: pages,
      description: description,
      img: img
    };

    // Agrega el objeto a la colección 'books' en Firebase
    db.collection('books').add(bookData)
      .then(() => {
        alert("Datos enviados exitosamente");
      })
      .catch((error) => {
        alert("Error al enviar los datos: ", error);
      });
  }

  return (
    <div className="reset">
      <h1>New Book</h1>
        <div>
          <label>Title:</label>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input 
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Pages:</label>
          <input
            type="number"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Image Link:</label>
          <input 
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <button onClick={sendDataToFireBase}>Enviar datos</button>
    </div>
  )
}

    
export default BookForm;
    