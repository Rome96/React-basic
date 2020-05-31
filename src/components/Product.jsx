import React from 'react'

const Product = ({ product }) => {
  const { name, price } = product
  return (
    <div>
      <h4 style={{color: 'blue'}}> {name} </h4>
      <p style={{color: '#0a97b0'}}> $ {price} </p><hr/>
    </div>
  );
}
 
export default Product;