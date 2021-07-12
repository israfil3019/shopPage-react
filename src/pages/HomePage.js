import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import loadingGif from "../assets/loading.gif";


const FEATURED_API = "https://fakestoreapi.com/products";

const HomePage = () => {

  const [products, setProducts] = useState([]);
  console.log("products are:", products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts(FEATURED_API);
  }, [setProducts]);

  const getProducts = (API) => {
    setLoading(true);
    axios.get(API).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  return (
    <div>
      {loading ? (
        <img src={loadingGif} alt="loading" />
      ) : (
        <div className="product-container">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
