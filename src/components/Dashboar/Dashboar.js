import React, { useContext, useEffect, useState } from "react";
import BooksFilter from "../Filter/BookFilter";
import Books from "../Books/Books";
import { useNavigate } from "react-router";
import { Button, Col, Row } from "react-bootstrap";
import { AuthenticationContext } from "../services/authentication/authentication.context";
import ToggleTheme from "../ui/ToggleTheme";
import { APIContext } from "../services/api/api.context";
import FireBase from "../../firebase/FireBase";
import NewBookButton from "../NewBook/NewBookButton";
import Header from "../Header/Header";
import DeleteBookButton from "../DeleteBook/DeleteBook";
import AddAdminButton from "../AddAdmin/AddAdminButton/AddAdminButton";

/* const BOOKS = [
  {
    id: 1,
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    dateRead: new Date(2021, 8, 12),
    pageCount: 410,
  },
  {
    id: 2,
    title: "Todos los fuegos el fuego",
    author: "Julio Cortazar",
    dateRead: new Date(2020, 6, 11),
    pageCount: 197,
  },
  {
    id: 3,
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    dateRead: new Date(2021, 5, 9),
    pageCount: 256,
  },
  {
    id: 4,
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    dateRead: new Date(2020, 3, 22),
    pageCount: 352,
  },
];
*/
const Dashboard = () => {
  const { user, handleLogout } = useContext(AuthenticationContext);
  const { toggleLoading } = useContext(APIContext);

  const userName = user.email.split("@")[0];

  const [books, setBooks] = useState([]);
  const [filterYear, setFilterYear] = useState("2023");

  useEffect(() => {
    toggleLoading(true);

    fetch("https://63a44a012a73744b0072f847.mockapi.io/api/books/Books", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((bookData) => {
        const booksMapped = bookData.map((book) => ({
          ...book,
          dateRead: new Date(book.dateRead),
        }));
        setBooks(booksMapped);
        toggleLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toggleLoading(false);
      });
  }, []);

  const navigation = useNavigate();

  const addBookHandler = (book) => {
    const newBooksArray = [book, ...books];
    setBooks(newBooksArray);
    localStorage.setItem("books", JSON.stringify(newBooksArray));
  };

  const filterYearChanged = (year) => {
    setFilterYear(year);
  };

  const onLogoutHandler = () => {
    handleLogout();
    navigation("/login");
  };

  return (
    <>
    <Header />
    <AddAdminButton />
      <Row className="me-2 my-4">
        <Col>
          <h4 className="text-left m-3">Hola {userName}</h4>
        </Col>
        <Col md={3} className="d-flex justify-content-end">
          <ToggleTheme />
          <Button className="ms-4" variant="primary" onClick={onLogoutHandler}>
            Cerrar sesión
          </Button>
        </Col>
      </Row>
      <NewBookButton />
      <DeleteBookButton />
      <BooksFilter
        filterYear={filterYear}
        onFilterYearChange={filterYearChanged}
      />
      <Books filterYear={filterYear} books={books} />
      <FireBase/>
    </>
  );
};

export default Dashboard;