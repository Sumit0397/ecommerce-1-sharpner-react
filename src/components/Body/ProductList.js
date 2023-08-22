import React, { useContext } from 'react'
import classes from "./ProductList.module.css";
import { useProductContext } from '../../context/productContext';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart-context';

const ProductList = () => {
  const cartCtx = useContext(CartContext);

  const { products, isLoading } = useProductContext();

  const clickHandler = (data) => {
    if (cartCtx.items.length > 0) {
      let copy = [...cartCtx.items];
      copy = copy.filter((element) => element.id === data.id);
      if (copy.length > 0) {
        cartCtx.quantityChange(copy[0].id);
      }else{
        let elem = {id:data.id, price:data.price, img:data.imageUrl , title:data.title, quantity:1};
        cartCtx.addCartItem({...elem})
      }
    }
    else{
      let elem = {id:data.id, price:data.price, img:data.imageUrl , title:data.title , quantity:1};
      cartCtx.addCartItem({...elem})
    }
  }

  // console.log(cartCtx.items);


  if (isLoading) {
    return (
      <div>...Loading</div>
    )
  }


  return (
    <section className={classes.container}>
      <h2>MUSIC</h2>
      <div className={classes["music-content"]}>
        {products.map(data => {
          return (<div id={data.id} key={data.id}>
            <h3>{data.name}</h3>
            <Link to={`/singleProduct/${data.id}`}>
              <div className={classes["image-container"]}>
                <img src={data.imageUrl} alt={data.title} className={classes["prod-images"]} />
              </div>
            </Link>
            <div className={classes["prod-details"]}>
              <span>
                $
                <span>{data.price}</span>
              </span>
              <button className={classes.button} onClick={() => clickHandler(data)}>ADD TO CART</button>
            </div>
          </div>)
        })}
      </div>
    </section>
  )
}

export default ProductList
