import React from "react";

const ProductList = ({ product, handleAdd }) => {
  return (
    <>
      <div className="products">
        <img src={product.image} alt="" />
        <p>{product.title}</p>
        <div className="desc">
          <span>{product.category.toUpperCase()}</span>
          <span>{product.price}</span>
        </div>
        <button className="add" onClick={() => handleAdd(product)}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductList;
