import React, { useContext } from 'react'
import LoginForm from './LoginForm';
import AuthContext from '../../context/auth-context';
import classes from './Login.module.css';
import Footer from '../Body/Footer';

const Login = () => {
  const authCtx = useContext(AuthContext);


  return (
    <div>
      {!authCtx.isLoggedin && <LoginForm/>}
      {authCtx.isLoggedin && 
       <section className={classes.section}>
        <div className={classes.div}>
          <p><h1>Welcome</h1></p>
          <p>{authCtx.userEmail}</p>
        </div>
        <Footer/>
      </section>}
    </div>
  )
}

export default Login;
