import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/firebase';
import './Header.css'
const Header = () => {
    const {user,handleSingOut}=useFirebase()
    return (
        <div className="header">
        
            <nav>
                <Link to='/Home'>Home</Link>
                <Link to='/Products'>Products</Link>
                <Link to='/Order'>Order</Link>
                <Link to='/Register'>Register</Link>
                <span>{user?.displayName &&  user.displayName}</span>
              {
              user?.uid
                  ?
                <button onClick={handleSingOut}> sing Out</button>
                 :
              <Link to='/Login'>Login</Link>
             
            }
               
            </nav>
         
        </div>
    );
};

export default Header;