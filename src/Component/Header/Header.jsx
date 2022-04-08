import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>hello header</h1>
            <h1>hello</h1>
            <nav>
                <Link to='/Home'>Home</Link>
                <Link to='/Login'>Login</Link>

            </nav>
        </div>
    );
};

export default Header;