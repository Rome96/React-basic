import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'
import ShoppingCart from './components/ShoppingCart'

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Camisa React', price: 50 },
    { id: 2, name: 'Camisa Angular', price: 40 },
    { id: 3, name: 'Camisa Node', price: 120 },
    { id: 4, name: 'Camisa Vue', price: 80 },
    { id: 5, name: 'Camisa Jet', price: 90 }
  ])

  const [productShoppingcart, setProductShoppingcart] = useState([])

  const date = new Date().getFullYear()
  return (
    <Fragment>
      <Header
        title = 'Tienda Virtual'
      />
      <h3>List Product</h3>
      {
        products.map(product => (
          <Product
            key={product.id}
            product={product}
            products={products}
            productShoppingcart={productShoppingcart}
            setProductShoppingcart={setProductShoppingcart}
          />
        ))
      }
      <ShoppingCart
            productShoppingcart={productShoppingcart}
            setProductShoppingcart={setProductShoppingcart}
      />
      <Footer
        date={date}
      />
    </Fragment>
  );
}

export default App;
