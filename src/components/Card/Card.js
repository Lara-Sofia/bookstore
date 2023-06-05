import './Card.css';

const Card = ({children}) => {
    return (
        <div className='book-item-container'>
            {children}
        </div>
    );
};

/*dentro del objeto props al que tienen acceso todos los componentes, posee una
propiedad llamada children que tomará el lugar de lo que nosotros encerremos.*/

export default Card;