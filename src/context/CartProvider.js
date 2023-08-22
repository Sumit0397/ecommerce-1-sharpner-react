import React, { useContext, useEffect, useState } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

const CartProvider = props => {


    const authCtx = useContext(AuthContext);
    // console.log(authCtx.userEmail);

    const [itemsArr, updateItemsArr] = useState([]);

    // useEffect(() => {
    //     updateItemsArr([])
    // }, [authCtx.userEmail])

    const onLoginRestore = async () => {
       if(authCtx.userEmail){ try {
            const email = authCtx.userEmail.replace(/[@.]/g, "");
            const response = await fetch(`https://crudcrud.com/api/24a507489ad14f2bba355f056bbe815c/cart${email}`)
            const resData = await response.json();
            let arr = [];
            resData.forEach((element) => {
                if(element.cartItems.length !== 0){
                    arr.push(element.cartItems[0]);
                }
            })
            updateItemsArr([...arr]);
        } catch (error) {
            console.log('something wrong on refresh');
        }}
    }

    useEffect(() => {
        onLoginRestore();
    },[authCtx.userEmail])

    useEffect(() => {
        onLoginRestore();
    },[])

    const addCartItemHandler = (item) => {
        updateItemsArr([...itemsArr, item]);
        saveCartItemsToBackend(item);
    };

    const removeCartItemHandler = async (index) => {
        const copyArr = [...itemsArr];
        let backendId;
        try {
            const email = authCtx.userEmail.replace(/[@.]/g,"");
            const response = await fetch(`https://crudcrud.com/api/24a507489ad14f2bba355f056bbe815c/cart${email}`)
            const resData = await response.json();
            resData.forEach((element) => {
                element.cartItems.forEach((cartItem) => {
                    if(cartItem.id === copyArr[index].id){
                        backendId = element._id
                    }
                })
            })
        } catch (error) {
            console.log("product is not available on cart");
        }
        copyArr.splice(index, 1);
        updateItemsArr(copyArr);
        try {
            const email = authCtx.userEmail.replace(/[@.]/g,"");
            await fetch(`https://crudcrud.com/api/24a507489ad14f2bba355f056bbe815c/cart${email}/${backendId}`,{
                method : "DELETE"
            })
        } catch (error) {
            console.log("delete error")
        }
    };

    const quantityChangeHandler = async (eleId) => {
        if (itemsArr.length > 0) {
            let backendId;
            try {
                const email = authCtx.userEmail.replace(/[@.]/g, "");
                const response = await fetch(`https://crudcrud.com/api/24a507489ad14f2bba355f056bbe815c/cart${email}`)
                const resData = await response.json();
                resData.forEach(element => {
                    element.cartItems.forEach((cartItem) => {
                        if (cartItem.id === eleId) {
                            backendId = element._id
                        }
                    })
                });
            } catch (error) {
                console.log("Product is not available on cart")
            }
            const copyArr = [...itemsArr];
            const index = copyArr.findIndex(obj => obj.id === eleId);
            if (index !== -1) {
                copyArr[index].quantity += 1;
                //     console.log(copyArr[index].quantity);
            }
            try {
                const email = authCtx.userEmail.replace(/[@.]/g, "");
                await fetch(`https://crudcrud.com/api/24a507489ad14f2bba355f056bbe815c/cart${email}/${backendId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        cartItems: [copyArr[index]]
                    })
                })
            } catch (error) {
                console.log("Cart Items already updated")
            }

            updateItemsArr(copyArr);
        }
    }

    const saveCartItemsToBackend = async (item) => {
        try {
            const email = authCtx.userEmail.replace(/[@.]/g, "");
            await fetch(`https://crudcrud.com/api/24a507489ad14f2bba355f056bbe815c/cart${email}`, {
                method: "POST",
                body: JSON.stringify({
                    cartItems: [item]
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log('cart items save to backend');
        } catch (error) {
            console.log("Error saving cart items to backend:", error);

        }
    }

    const emptyCartHandler = async () => {
        try {
            const email = authCtx.userEmail.replace(/[@.]/g,"");
            const response = await fetch(`https://crudcrud.com/api/24a507489ad14f2bba355f056bbe815c/cart${email}`)
            const resData = await response.json();
            
            for(const cart of resData){
                const cartId = cart._id
                if(cartId){
                    await fetch(`https://crudcrud.com/api/24a507489ad14f2bba355f056bbe815c/cart${email}/${cartId}`,{
                        method : "DELETE"
                    })
                }
            }
            updateItemsArr([]);
        } catch (error) {
            console.log("delete error")
        }

    }

    const cartContext = {
        items: itemsArr,
        addCartItem: addCartItemHandler,
        removeCartItem: removeCartItemHandler,
        emptyCart: emptyCartHandler,
        quantityChange: quantityChangeHandler,
        onLogin : onLoginRestore,
    };


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;