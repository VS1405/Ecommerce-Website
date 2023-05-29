import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import classes from './AuthForm.module.css'

import AuthContect from '../store/auth-context';

const AuthForm = () => {

  const history = useNavigate()

  const AuthCtx = useContext(AuthContect)

  const EmailInputRef = useRef()
  const PasswordInputRef = useRef()

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoding] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = EmailInputRef.current.value;
    const enteredPassword = PasswordInputRef.current.value;

    //  add validation
    setIsLoding(true)
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyANERAA73WHHRcFhuL9MCJGwce_lmCyKBQ'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyANERAA73WHHRcFhuL9MCJGwce_lmCyKBQ'
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setIsLoding(false);
      if (response.ok) {
        return response.json()
        // console.log(response); 
      } else {
        return response.json().then((data) => {
          let errorMessage = 'Authentication failed!';
          // if(data && data.error && data.error.message){
          //   errorMassage= data.error.message
          // }
          throw new Error(errorMessage);
          // alert(errorMessage)
        });
      }
    })
      .then((data) => {
        AuthCtx.login(data.idToken)
        history('/')
      })
      .catch((error) => {
        alert(error.message)
      });
  };



  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={EmailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={PasswordInputRef}
          />
        </div>

        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? <NavLink to={'/Login/product'} className={classes.link}>Login</NavLink> : 'Create Account'}</button>}
          {isLoading && <p>Loading...</p>}
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
};

export default AuthForm;
