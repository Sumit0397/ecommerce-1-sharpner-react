import React from 'react';
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div >
      <div className={classes.buttons}>
        <button className={classes["latest-album"]}>Get our Latest Album</button>
        <button className={classes["play-btn"]}>►</button>
      </div>
      <div className={classes.container}>
        <div>
          <h1 className={classes.h1}>TOURS</h1>
        </div>
        <div>
          <div className={classes["tour-item"]}>
            <span className={classes.date}>JUL16</span>
            <span className={classes.place}>DETROIT, MI</span>
            <span className={classes["spec-place"]}>DTE ENERGY MUSIC THEATRE</span>
            <button className={classes["buy-btn"]}>BUY TICKETS</button>
          </div>
          <div className={classes["tour-item"]}>
            <span className={classes.date}>JUL19</span>
            <span className={classes.place}>TORONTO,ON</span>
            <span className={classes["spec-place"]}>BUDWEISER STAGE</span>
            <button className={classes["buy-btn"]}>BUY TICKETS</button>
          </div>
          <div className={classes["tour-item"]}>
            <span className={classes.date}>JUL22</span>
            <span className={classes.place}>BRISTOW, VA</span>
            <span className={classes["spec-place"]}>JIGGY LUBE LIVE</span>
            <button className={classes["buy-btn"]}>BUY TICKETS</button>
          </div>
          <div className={classes["tour-item"]}>
            <span className={classes.date}>JUL29</span>
            <span className={classes.place}>PHOENIX, AZ</span>
            <span className={classes["spec-place"]}>AK-CHIN PAVILION</span>
            <button className={classes["buy-btn"]}>BUY TICKETS</button>
          </div>
          <div className={classes["tour-item"]}>
            <span className={classes.date}>AUG 2</span>
            <span className={classes.place}>LAS VEGAS, NV</span>
            <span className={classes["spec-place"]}>T-MOBILE ARENA</span>
            <button className={classes["buy-btn"]}>BUY TICKETS</button>
          </div>
          <div className={classes["tour-item"]}>
            <span className={classes.date}>AUG 7</span>
            <span className={classes.place}>CONCORD, CA</span>
            <span className={classes["spec-place"]}>DTE ENERGY MUSIC THEATRE</span>
            <button className={classes["buy-btn"]}>BUY TICKETS</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
