import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div>
            <h1>Please Register Now</h1> 
                <form action="">
            <input type="email" placeholder="type your email address"/> <br/>
              <input type="password" placeholder="Type Your Password"/> <br/>
              <input type="submit" value="Register"/> <br/>
            </form>
        </div>
    );
};

export default Register;