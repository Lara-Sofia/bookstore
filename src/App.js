import './App.css';

import Header from './components/Header/Header.js';
import Books from './components/Books/Books.js';
import NewBook from './components/NewBook/NewBook';
import BookFilter from './components/Filter/BookFilter';
import Login from './components/Form/Login';

import { useState } from 'react';


function App() {
  //mostrar valores harcodeados
  const hardcoreBooks = [
    {
      id: 1,
      title: "100 años de soledad",
      author: "Gabriel García Marquez",
      date: new Date(2021, 8, 12),
      pages: 410,
    },
    {
      id: 2,
      title: "Todos los fuegos el fuego",
      author: "Julio Cortazar",
      date: new Date(2020, 6, 11),
      pages: 197,
    },
    {
      id: 3,
      title: "Asesinato en el Orient Express",
      author: "Agatha Christie",
      date: new Date(2021, 5, 9),
      pages: 256,
    },
    {
      id: 4,
      title: "Las dos torres",
      author: "J.R.R Tolkien",
      date: new Date(2020, 3, 22),
      pages: 352,
    },
  ];

  //setemos año, y pasamos de hijo --> padre
  const [selectYear, setSelectYear] = useState('');
  const handlerYear = (year) => { 
      setSelectYear(year); 
      console.log(year);
  }

  //seteamos y pasamos de hijo --> padre --> abuelo
  const [books, setBooks] = useState(hardcoreBooks);
  const sendDataBookToApp = (data) => { 
    //const newArrayDataBook = [data, ...books];
    setBooks([data, ...books]);
    //localStorage.setItem('books', JSON.stringify(newArrayDataBook));
    console.log('in app');
  }
  console.log(books);


  //SOLO POR EL LOGIN
  
  
  return (
    /*<div>
      <Header />
      <NewBook sendDataBookFromNewBook={sendDataBookToApp}/>
      <BookFilter 
        selectYear={selectYear} 
        onYearChangeToApp={handlerYear}/>
      <Books selectYear={selectYear} books = {books}/>
    </div>*/
    <>
      <Login/>
    </>
  );
};

export default App;
