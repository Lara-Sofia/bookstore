import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/" className='logo-link'>
            <h1>BIBLIOTECA UTN</h1>
            </Link>
        </div>
    );
};

export default Header;

