import React from "react";
import Product from "./Product";
import "../styles/shoppingCart.css";

const ShoppingCart = ({ productShoppingcart, setProductShoppingcart }) => {
  return (
    <div className="shoppingCart">
      <h4 style={{ color: "green" }}>Carrito</h4>
      {
        productShoppingcart.length === 0 ? (
          <p>No hay Productos en el carrito</p>
        ) : (
          productShoppingcart.map((product) => (
            <Product
             key={product.id}
             product={product}
             productShoppingcart={productShoppingcart}
             setProductShoppingcart={setProductShoppingcart}
            />
          ))
        )
      }
    </div>
  );
};

export default ShoppingCart;
