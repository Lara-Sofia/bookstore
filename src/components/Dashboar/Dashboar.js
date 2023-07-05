import React, { useState } from "react";
import FireBase from "../../firebase/FireBase";
import AddAdminButton from "../AddAdmin/AddAdminButton/AddAdminButton";
import BookList from "../BookList/BookList";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NewBookButton from "../NewBookButton/NewBookButton";

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  const addBookHandler = (book) => {
    const newBooksArray = [book, ...books];
    setBooks(newBooksArray);
    // Aquí puedes realizar cualquier otra acción relacionada con el nuevo libro agregado
  };

  return (
    <>
      <Navbar />  
      <AddAdminButton/>
      <NewBookButton />
      <BookList />
      <FireBase />
      <Footer />
    </>
  );
};

export default Dashboard;