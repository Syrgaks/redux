import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import "./home.css";
import axios from "axios";

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(API);
        setProducts(data.slice(0, 8)); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="flower">
        {products.map(({ id, ...item }) => (
          <Product key={id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
