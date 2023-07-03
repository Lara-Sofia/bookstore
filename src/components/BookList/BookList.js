import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import "./BookList.css";
//import Delete from "../DeleteBook/Delete";
//import EditBook from "../EditBookButton/EditBookButton";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBookId, setEditingBookId] = useState(null);
  const [updatedBookTitle, setUpdatedBookTitle] = useState("");
  const [updatedBookAuthor, setUpdatedBookAuthor] = useState("");
  const [updatedBookPages, setUpdatedBookPages] = useState("");
  const [updatedBookDescription, setUpdatedBookDescription] = useState("");
  const [updatedBookImage, setUpdatedBookImage] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    db.collection("books")
      .get()
      .then((snapshot) => {
        const booksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(booksData);
      })
      .catch((error) => {
        console.error("Error al obtener los libros", error);
      });
  }, []);

  const handleEditBook = (bookId) => {
    const bookToEdit = books.find((book) => book.id === bookId);
    if (bookToEdit) {
      setEditingBookId(bookId);
      setUpdatedBookTitle(bookToEdit.title);
      setUpdatedBookAuthor(bookToEdit.author);
      setUpdatedBookPages(bookToEdit.pages);
      setUpdatedBookDescription(bookToEdit.description);
      setUpdatedBookImage(bookToEdit.img);
    }
  };

  const handleDeleteBook = (bookId) => {
    db.collection("books")
      .doc(bookId)
      .delete()
      .then(() => {
        setBooks((prevBooks) =>
          prevBooks.filter((book) => book.id !== bookId)
        );
      })
      .catch((error) => {
        console.error("Error al eliminar el libro", error);
      });
  };

  const handleAddToCart = (bookId) => {
    const bookToAdd = books.find((book) => book.id === bookId);
    if (bookToAdd) {
      setCartItems((prevItems) => [...prevItems, bookToAdd]);
    }
  };

  const handleUpdateBook = (bookId) => {
    const updatedBook = {
      title: updatedBookTitle,
      author: updatedBookAuthor,
      pages: updatedBookPages,
      description: updatedBookDescription,
      img: updatedBookImage,
    };

    db.collection("books")
      .doc(bookId)
      .update(updatedBook)
      .then(() => {
        setBooks((prevBooks) =>
          prevBooks.map((book) => {
            if (book.id === bookId) {
              return {
                id: book.id,
                ...updatedBook,
              };
            }
            return book;
          })
        );
        setEditingBookId(null);
        setUpdatedBookTitle("");
        setUpdatedBookAuthor("");
        setUpdatedBookPages("");
        setUpdatedBookDescription("");
        setUpdatedBookImage("");
      })
      .catch((error) => {
        console.error("Error al actualizar el libro", error);
      });
  };

  return (
    <div className="book-list">
      <button onClick={() => setShowCart(!showCart)}>
        Favorites ({cartItems.length})
      </button>

      <h2>Books:</h2>
      {showCart && (
        <div className="cart-books">
          <h3>Your Favorites Books </h3>
          {cartItems.length === 0 ? (
            <p>No Favorites Books</p>
          ) : (
            <ul>
              {cartItems.map((book) => (
                <li key={book.id}>
                  <h4>{book.title}</h4>
                  <p>{book.author}</p>
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => setCartItems([])}>Empty Cart</button>
        </div>
      )}

      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            {editingBookId === book.id ? (
              <div>
                <input
                  type="text"
                  value={updatedBookTitle}
                  onChange={(e) => setUpdatedBookTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={updatedBookAuthor}
                  onChange={(e) => setUpdatedBookAuthor(e.target.value)}
                />
                <input
                  type="text"
                  value={updatedBookPages}
                  onChange={(e) => setUpdatedBookPages(e.target.value)}
                />
                <textarea
                  value={updatedBookDescription}
                  onChange={(e) => setUpdatedBookDescription(e.target.value)}
                ></textarea>
                <input
                  type="text"
                  value={updatedBookImage}
                  onChange={(e) => setUpdatedBookImage(e.target.value)}
                />
                <button onClick={() => handleUpdateBook(book.id)}>
                  Update
                </button>
              </div>
            ) : (
              <div>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Pages: {book.pages}</p>
                <p>Description: {book.description}</p>
                <img src={book.img} alt="Portada del libro" />
                <div className="buttons-container">
                  <button onClick={() => handleDeleteBook(book.id)}>
                    Delete
                  </button>
                  <button onClick={() => handleEditBook(book.id)}>Edit</button>
                  <button onClick={() => handleAddToCart(book.id)}>Add to Cart</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
