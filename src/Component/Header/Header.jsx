import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
        
            <nav>
                <Link to='/Home'>Home</Link>
                <Link to='/Products'>Products</Link>
                <Link to='/Order'>Order</Link>
                <Link to='/Login'>Login</Link>
                <Link to='/Register'>Register</Link>
               
            </nav>
         
        </div>
    );
};

export default Header;