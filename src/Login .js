import React , { useState }from "react";
import "./Login.css";
import { Link ,useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const history=useHistory();
    const [email,setEamil] =useState('');
    const [password,setPassword] =useState('');

 const signin = e =>{
     e.preventDefault();
     auth.signInWithEmailAndPassword(email,password)
     .then(auth =>{
       
            history.push('/')
        
    })
    .catch(error => alert( error.message))

 }

 const register = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
        .then(auth =>{
              if(auth){
                history.push('/')
            }
        })
        .catch(error => alert( error.message))
    
}
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/120px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>

      <div className="login_container">
        <h1> Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email}
            onChange={e => setEamil(e.target.value)}
           />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button className="login_button"  type="submit" onClick={signin} > Sign In</button>
        </form>
        <p>
          By Signing-In, you agree to Amazon's Fake Clone Conditions of Use and
          Privacy Notice.
        </p>

        <button className="login_reg_button" onClick={register}>
        
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
