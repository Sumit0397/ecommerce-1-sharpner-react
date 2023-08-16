import CartItems from './CartItem'
import Modal from './Modal'
import React from 'react'
// import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal>
      <CartItems onHideCart={props.onHideCart}/>
    </Modal>
  )
}

export default Cart
