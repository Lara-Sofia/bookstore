import './ReadDate.css';


const ReadDate = ({readDate}) => {
    const year = readDate.getFullYear();
    const month = readDate.toLocaleString("es-AR", { month: "long" });
    const day = readDate.toLocaleString("es-AR", { day: "2-digit" });

    return (
        <div className='readDate'>
        {year}
        {month}
        {day}
        </div>
    );
};

export default ReadDate;
