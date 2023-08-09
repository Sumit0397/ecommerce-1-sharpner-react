import React from 'react'
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={classes.cart}>
      <h2>CART</h2>
      <button className={classes.cancel}>X</button>
      <div className={classes["cart-item"]}> 
        <span>ITEM</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
      </div>
      <div>
        <ul>

        </ul>
      </div>
      <div className={classes["cart-total"]}>
        <span>
            <span><strong>Total</strong></span>
            {" "}{" "}$
            <span>0.00</span>
        </span>
      </div>
      <button className={classes["buy-btn"]}>PURCHASE</button>
    </div>
  )
}

export default Cart
