import React, { useRef } from 'react';
import classes from "./Contact.module.css";

const Contact = (props) => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');

  const submitHandler = (event) => {

    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value
    }

    console.log(data);
    props.onSubmit(data);

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = ""
  }

  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder='+910000000000' ref={phoneRef} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
