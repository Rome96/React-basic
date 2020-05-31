import React from 'react'

const Product = ({ product, products, productShop, setProductShop }) => {

  const { name, price, id } = product

  const addProductShop = id => {
    const product = products.filter(productFil => productFil.id === id)[0]
    console.log('Poduct Shop:', product)
    setProductShop([...productShop, product])
  }

  return (
    <div>
      <h4 style={{color: 'blue'}}> {name} </h4>
      <p style={{color: '#0a97b0'}}> $ {price} </p>
      <button
        type='button'
        onClick={() => addProductShop(id)}
      >
        To Buy
      </button>
      <hr/>
    </div>
  );
}
 
export default Product;