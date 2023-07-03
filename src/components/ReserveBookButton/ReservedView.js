import React from "react";
import { Link } from "react-router-dom";
import "./ReservedView.css";

const ReservedView = () => {
  return (
    <div className="reserved-view">
      <Link to="/reserved-books">
        <button>Reserved Books</button>
      </Link>
    </div>
  );
};

export default ReservedView;
