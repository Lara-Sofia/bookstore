import "./ReserveBookButton.css";
import { useState } from "react";
import { db } from "../../firebase/config";
import "firebase/firestore";

const ReserveBookButton = ({ bookId, onBookDeleted }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const deleteBook = async () => {
    try {
      await db.collection("books").doc(bookId).delete();
      onBookDeleted(bookId);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const showConfirmationDialog = () => {
    setShowConfirmation(true);
  };

  const hideConfirmationDialog = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="reserve-book">
      {showConfirmation ? (
        <div>
          <p>¿Estás seguro de que quieres eliminar este libro?</p>
          <button onClick={deleteBook}>Sí</button>
          <button onClick={hideConfirmationDialog}>No</button>
        </div>
      ) : (
        <button onClick={showConfirmationDialog}>Reservar Libro</button>
      )}
    </div>
  );
};

export default ReserveBookButton;