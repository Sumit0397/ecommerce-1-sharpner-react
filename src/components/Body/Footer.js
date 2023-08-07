import React from 'react'
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <h2>The Generics</h2>
      </div>
      <div className={classes["footer-icons"]}>
        <div>
            youtube Icon
        </div>
        <div>
            spotify icon
        </div>
        <div>
            facebook icon
        </div>
      </div>
    </div>
  )
}

export default Footer
