import "./BookFilter.css";

const BookFilter = ({ onYearChangeToApp, selectYear }) => {

    const handlerYear = ( e ) => {
        const year = e.target.value;
        onYearChangeToApp(year);
        
    };
   

  return (
    <div className="Books-filter">
      <div className="Books-filter__control">
        <select onChange={handlerYear} value={selectYear}>
          <option value="">Select a year</option> 
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default BookFilter;