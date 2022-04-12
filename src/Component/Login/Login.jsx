import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/firebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Login.css'

const auth = getAuth(app);
const Login = () => {
  // const {singInWithGoogle}=useFirebase();

  const [signInWithGoogle,user]=useSignInWithGoogle(auth);

    return (
        <div>
          <div className="loginContainer">
              <h1 className="login">Please Login</h1>
          </div>
          <div className="">
          <button onClick={() =>signInWithGoogle()}>sing in with google</button> 
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