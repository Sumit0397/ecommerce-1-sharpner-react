import React from 'react'
import classes from "./Header.module.css";
import Title from '../Body/Title';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className={classes.main}>
            <div >
                <ul className={classes.nav}>
                    <li>
                        <Link to="/" className={classes.navLink}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/store" className={classes.navLink}>STORE</Link>
                    </li>
                    <li>
                        <Link to="/about" className={classes.navLink}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={classes.navLink}>CONTACT US</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className={classes["cart-tag"]}>
                        CART <sup><span className={classes.span}>0</span></sup>
                    </li>
                </ul>
            </div>

        </div>
        <Title/>
        </>
    )
}

export default Header
