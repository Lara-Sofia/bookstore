import './BookItems.css';

import Card from '../Card/Card';
import ReadDate from '../ReadDate/ReadDate';

import { useState } from 'react'; 

const BookItems =  ({title, author, date, pages}) => {

    const [newTitle, setNewTitle ] = useState(title); // set new title
    const changeTitleHandler = () => { //función relacionada a eventos 
        setNewTitle('Actualizado'); 
        // no se le asigna, sino que se rederiza (actualiza)
        //set...is a fuction
        console.log(newTitle);
    };

    return (
        <Card>
            <h1>{newTitle}</h1>
            <h3>{author}</h3>
            <ReadDate readDate = {date}/>
            <p>{pages}</p>
            <button onClick={changeTitleHandler}> Cambiar título </button>
        </Card>
    );
};

export default BookItems;