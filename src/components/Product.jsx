import React from "react";

const Product = ({
  product,
  products,
  productShoppingcart,
  setProductShoppingcart,
}) => {
  const { name, price, id } = product;

  const productsShoppingcart = (id) => {
    const product = products.filter((productFil) => productFil.id === id)[0];
    setProductShoppingcart([...productShoppingcart, product]);
  };

  const deleteProductsShoppingcart = (id) => {
    const products = productShoppingcart.filter((product) => product.id !== id);
    setProductShoppingcart(products);
  }

  return (
    <div>
      <h4 style={{ color: "blue" }}> {name} </h4>
      <p style={{ color: "#0a97b0" }}> $ {price} </p>
      {
        products ? (
          <button type="button" onClick={() => productsShoppingcart(id)}>
            Comprar
          </button>
        ) : (
          <button type="button" onClick={() => deleteProductsShoppingcart(id)}>
            Eliminar
          </button>
        )
      }
    </div>
  );
};

export default Product;
