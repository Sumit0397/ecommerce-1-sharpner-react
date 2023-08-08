import React from 'react'
import classes from './Footer.module.css';
import ytImg from "../../icon-images/youtube-icon.jpg";
import stImg from "../../icon-images/spotify icon.png";
import fbImg from "../../icon-images/facebook icon.jpg";


const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <h2>The Generics</h2>
      </div>
      <div className={classes["footer-icons"]}>
        <div>
          <a href="https://www.youtube.com">
            <img src={ytImg} alt='youtube img'/>
          </a>
        </div>
        <div>
          <a href="https://spotify.com">
            <img src={stImg} alt='spotify img' />
          </a>
        </div>
        <div>
          <a href="https://facebook.com">
            <img src={fbImg} alt='facebook img'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
