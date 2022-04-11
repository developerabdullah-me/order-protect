import React from 'react';
import useFirebase from '../../hooks/firebase';

import './Login.css'
const Login = () => {
  const {singInWithGoogle}=useFirebase();
    return (
        <div>
          <div className="loginContainer">
              <h1 className="login">Please Login</h1>
          </div>
          <div className="">
          <button onClick={singInWithGoogle}>sing in with google</button> 
            <form>
        

            <input type="email" placeholder="type your email address"/> <br/>
              <input type="password" placeholder="type your password" /> <br/>
              <input type="submit"  value="Login"/> <br/>
            </form>
          </div>
        </div>
    );
};

export default Login;