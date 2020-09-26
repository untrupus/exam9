import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2><Link className="logo" to='/'>&#9742; Contacts</Link></h2>
            <h4><Link className="addBtn" to='/add'>Add new contact</Link></h4>
        </div>
    );
};

export default Header;