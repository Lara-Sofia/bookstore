import './Books.css';

import BookItems from '../BookItem/BookItems';

const Books = ({books, selectYear}) => {
    //verificación x si no ay liobros ese año
    if (books.length === 0) return <></>

    const booksMap = books
        .filter((book) => book.date.getFullYear().toString() === selectYear)
        .map((book) => (
            <BookItems
              key = {book.id}
              title = {book.title}
              author = {book.author}
              date = {book.date}
              pages = {book.pages}
            />
        ))
    
        return (
        <div className='book-container'>
          {booksMap.length === 0 ? (<p>no hay libros disponibles</p>) : booksMap}
          {
            //books.map((book) => (
            //    <BookItems
            //    id = {book.id}
            //    title = {book.title}
            //    author = {book.author}
            //    date = {book.date}
            //    pages = {book.pages}
            //    />
            //))
          }
        </div>
    );
};

export default Books;