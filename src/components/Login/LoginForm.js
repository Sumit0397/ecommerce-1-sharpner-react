import React, { useContext, useRef, useState } from 'react';
import classes from "./LoginForm.module.css";
import AuthContext from '../../context/auth-context';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {

  const authCtx = useContext(AuthContext);
  const history = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading , setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNcDv8rsg174Ja5eftH-Ehcphdm1jhk-Q"
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNcDv8rsg174Ja5eftH-Ehcphdm1jhk-Q"
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      setIsLoading(false)
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then(data => {
          let errorMsg = "Authentication Failed!";
          if (data && data.error && data.error.message) {
            errorMsg = data.error.message
          }
          // alert(errorMsg);
          throw new Error(errorMsg);
        })
      }
    }).then(data => {
      authCtx.login(data.idToken,data.email);
      history("/store" , {replace : true})
      console.log(data);
    }).catch((err) => {
      alert(err.message)
    })


  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button >{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm
