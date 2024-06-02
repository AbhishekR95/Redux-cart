import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../Pages/ProductList";
import { add } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios("https://fakestoreapi.com/products");
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <div className="productContainer">
        {products.map((product) => {
          return (
            <ProductList
              key={product.id}
              product={product}
              handleAdd={handleAdd}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
