import'./NewBook.css';

import BookForm from '../BookForm/BookForm';

const NewBook = ({sendDataBookFromNewBook}) => {
    const sendDataBookToApp = (enteredDataBook) => {
        console.log(enteredDataBook);
        console.log('seding new book');
        sendDataBookFromNewBook(enteredDataBook);
    }

//const dataBookFromBookForm = (enteredDataBook) => {
//    const dataBook = {
//        ...enteredDataBook,
//        id: Math.random().toString()
//    };
//   // console.log(dataBook );
//   sendDataBookToApp(dataBook);
//};

    return (
        <div className='new-book'>
            <BookForm sendDataBookFromNewBook={sendDataBookToApp}/>
        </div>
    );

    
};

export default NewBook;