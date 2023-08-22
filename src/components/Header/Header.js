import React, { useContext } from 'react'
import classes from "./Header.module.css";
import Title from '../Body/Title';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart-context';
import AuthContext from '../../context/auth-context';

const Header = (props) => {

    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);

    let cartCount = 0;

    cartCtx.items.forEach((elem) => {
        cartCount += elem.quantity;
    })

    const logoutHandler = () => {
        authCtx.logout();
    }

    // console.log(cartCount);

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
                    <ul className={classes.nav}>
                        {!authCtx.isLoggedin && <li className={classes.loginli}>
                            <Link to="/login" className={classes.login}>LOGIN</Link>
                        </li>}
                        {authCtx.isLoggedin &&<>
                            <li className={classes.loginli}>
                            <Link to="/login" className={classes.login}>PROFILE</Link>
                        </li>

                            <li className={classes.loginli}>
                                <Link to="/login" className={classes.login} onClick={logoutHandler}>LOGOUT</Link>
                            </li> </>}
                        <li className={classes["cart-tag"]} onClick={props.onShowCart}>
                            CART <sup><span className={classes.span}>{cartCount}</span></sup>
                        </li>
                    </ul>
                </div>

            </div>
            <Title />
        </>
    )
}

export default Header
