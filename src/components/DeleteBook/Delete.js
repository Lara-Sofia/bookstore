import { db } from "../../firebase/config";

const Delete = (bookId) => {
    const confirmDelete = window.confirm("¿Estás seguro/a de que deseas eliminar este libro?");
  
    if (confirmDelete) {
      const bookRef = db.collection("books").doc(bookId);
  
      bookRef
        .delete()
        .then(() => {
          alert("Libro eliminado exitosamente");
        })
        .catch((error) => {
          alert("Error al eliminar el libro", error);
        });
    }
  };
  
  export default Delete;