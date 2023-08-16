import React, { useContext } from "react";
import CartContext from "../../context/cart-context";

import classes from "./CartItem.module.css";


const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  let total = 0;
  cartCtx.items.forEach((element) => {
    total += Number(element.price) * Number(element.quantity);
  });

  const deleteHandler = (event) => {
    event.preventDefault();
    const eleIdx = event.target.id;
    cartCtx.removeCartItem(eleIdx);
  };

  const changeQuantityhandler = (event) => {
    console.log(event.target.id);
  }

  const purchaseHandler = () => {
    alert("Thanks For Purchase!!");
    cartCtx.emptyCart();
  }

  if (cartCtx.items.length === 0) {
    return (
      <div className={classes.emptyCart}>
        <div className={classes.header}>
          <h3>Cart Items</h3>
          <button onClick={props.onHideCart}>X</button>
        </div>
        <div className={classes.empty}>
          <p>Your Cart Is Empty!</p>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className={classes.itemCart}>
        <div className={classes.header}>
          <h3>Cart Items</h3>
          <button onClick={props.onHideCart}>X</button>
        </div>
        <div className={classes.heading}>
          <span>ITEM</span>
          <span>Price</span>
          <span>Quantity</span>
        </div>
        <ul className={classes.cartItems}>
          {cartCtx.items.map((ele, idx) => (
            <li className={classes.list} key={idx}>
              <div>
                <img src={ele.img} alt={ele.title} />
                <span>{ele.title}</span>
              </div>
              <span>{ele.price}</span>
              <div>
                <input type="number" step="1" value={ele.quantity} onChange={changeQuantityhandler} />
                <button id={idx} onClick={deleteHandler}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className={classes.footer}>
          <h3>Total</h3>
          <strong><span>${total}</span></strong>
        </div>
        <div className={classes.purchase}>
          <button onClick={purchaseHandler}>PURCHASE</button>
        </div>
      </div>
    );
  };
}

export default CartItems;