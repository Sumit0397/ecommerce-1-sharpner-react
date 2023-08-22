import React from "react";

const CartContext = React.createContext({
    items: [],
    addCartItem: (item)=>{},
    removeCartItem: (item)=>{},
    emptyCart: () => {},
    quantityChange: ()=> {},
    onLogin : () => {}
})

export default CartContext;