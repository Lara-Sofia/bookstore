import './BookForm.css';

import { useState } from 'react';

const BookForm = ({sendDataBookFromNewBook}) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredPage, setEnteredPage] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    

    const changeTitleHandler = (e) => {
        setEnteredTitle(e.target.value);
    };
    const changeAuthorHandler = (e) => {
        setEnteredAuthor(e.target.value);
    };
    const changePageHandler = (e) => {
        setEnteredPage(e.target.value);
    };
    const changeDateHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitBookHandler = (e) => {
        e.preventDefault() //evita el reload
        const dataBook = {
            id: Date.now(),
            title : enteredTitle,
            author : enteredAuthor,
            page : enteredPage,
            date : new Date(enteredDate)
        };
        //console.log(dataBook);
        sendDataBookFromNewBook(dataBook); // lo envía como un parámetro
        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredPage("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitBookHandler}>
            <div className='new-book-controls'>
                <div className='new-book-control'>
                    <label>Título</label>
                    <input type='text'
                    value={enteredTitle} 
                    onChange={changeTitleHandler}/>
                </div>

                <div className='new-book-control'>
                    <label>Autor</label>
                    <input type='text'
                    value={enteredAuthor}
                    onChange={changeAuthorHandler}/>
                </div>

                <div className='new-book-control'>
                    <label>páginas</label>
                    <input type='number' min='1' step='1'
                    value={enteredPage}
                    onChange={changePageHandler}/>
                </div>

                <div className='new-book-control'>
                    <label>¿Cuándo terminaste de leerlo?</label>
                    <input type="date" min='2019-01-01' max="2022-12-31" 
                    value={enteredDate}
                    onChange={changeDateHandler}/>
                </div>

            </div>
            <div className='new-book-actions'>
                <button type='submit' onClick={submitBookHandler}>Agregar lectura</button>
            </div>
        </form>
    );
};

export default BookForm;