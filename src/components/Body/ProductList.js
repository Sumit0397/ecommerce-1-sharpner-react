import React from 'react'
import classes from "./ProductList.module.css";
import Data from '../Data/Data';

const ProductList = () => {

  const {productsArr} = Data;


  return (
   <section className={classes.container}>
      <h2>MUSIC</h2>
      <div className={classes["music-content"]}>
        {productsArr.map(data => {
          return ( <div id={data.name} key={data.id}>
            <h3>{data.name}</h3>
            <div className={classes["image-container"]}>
              <img src={data.imageUrl} alt={data.title} className={classes["prod-images"]}/>
            </div>
            <div className={classes["prod-details"]}>
              <span>
                $
                <span>{data.price}</span>
              </span>
              <button className={classes.button}>ADD TO CART</button>
            </div>
          </div>)
        })}
      </div>
   </section>
  )
}

export default ProductList
