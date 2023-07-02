import React, { useState } from "react";

import NewBook from "../NewBook/NewBook";
//import BooksFilter from "../Filter/BookFilter";
import Books from "../Books/Books";
//import { useNavigate } from "react-router";
import { Button, Col, Row } from "react-bootstrap";
import { useAuth } from "../services/authentication/authentication.context";
import ToggleTheme from "../ui/ToggleTheme";
//import { APIContext } from "../services/api/api.context";
import FireBase from "../../firebase/FireBase";
import Spinner from "../ui/Spinner/Spinner";
import AddAdminButton from "../AddAdmin/AddAdminButton/AddAdminButton";

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  const { user, logout, isLoading } = useAuth();
  const userName = user.email.split("@")[0];
  if (isLoading) return <Spinner />


  const addBookHandler = (book) => {
    const newBooksArray = [book, ...books];
    setBooks(newBooksArray);
    localStorage.setItem("books", JSON.stringify(newBooksArray));
  };
  

  const handleLogout = async() => {
    await logout();
  };

  return (
    <>
      <AddAdminButton/>
      <Row className="me-2 my-4">
        <Col>
          <h4 className="text-left m-3">Hola {userName}</h4>
        </Col>
        <Col md={3} className="d-flex justify-content-end">
          <ToggleTheme />
          <Button className="ms-4" variant="primary" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Col>
      </Row>
      <NewBook onBookAdded={addBookHandler} />
      <Books  books={books} />
      <FireBase />
    </>
  );
};

export default Dashboard;