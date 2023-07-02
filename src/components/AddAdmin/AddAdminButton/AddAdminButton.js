import React from "react";
import { Link } from "react-router-dom";
import "./AddAdminButton.css"

const AddAdminButton = () => {

    return (
        <div className="add-admin">
            <Link to="/addAdmin">
                <button>Add Admin</button>
            </Link>
        </div>
    )
}

export default AddAdminButton;
