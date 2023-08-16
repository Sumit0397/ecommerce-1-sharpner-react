import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Data from '../Data/Data';
import classes from "./SingleProduct.module.css";

const SingleProduct = () => {


  const { id } = useParams();
  const { productsArr } = Data;

  // Find the product with the matching id
  const product = productsArr.find(product => product.id === id);

  console.log('Product ID:', id);
  console.log('Products:', productsArr);
  console.log('Found Product:', product);

  const [mainImage, setMainImage] = useState(product.image[0])

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={classes.body}>
      <h1 className={classes.h1}>Product Details</h1>
      <div className={classes.container}>
        <div className={classes["img-content"]}>
          <div className={classes["img-container"]}>
            {
              product.image.map((curElem, index) => {
                return (<img
                  src={curElem.url}
                  alt={curElem.filename}
                  key={index}
                  className={classes.box}
                  onClick={() => setMainImage(curElem)}
                />)
              })
            }
          </div>
          <div className={classes["main-box"]}>
            <img src={mainImage.url} alt={mainImage.filename} className={classes.img} />
          </div>
        </div>
        <div className={classes.details}>
          <h2>{product.title}</h2>
          <p>{product.name}</p>
          <p><strong>Details:</strong>{" "}{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <Link to="/cart">
            <button>Add To Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

