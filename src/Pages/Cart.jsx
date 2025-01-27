import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart() {
  const [products, setProducts] = useState([]);  // State to store all products
  const [filteredProducts, setFilteredProducts] = useState([]);  // State to store filtered products

  // useEffect(() => {
  //   // Fetching products from the API
  //   axios.get('https://dummyjson.com/products?limit=1000')
  //     .then((res) => {
  //       console.log(res.data.products, 111);
  //       setProducts(res.data.products);
  //       setFilteredProducts(res.data.products);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);  // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {/* {filteredProducts.length > 0 ? (
          // <ul>
          //   {filteredProducts.map((product) => (
          //     <li key={product.id}>{product.name} - ${product.price}</li>
          //   ))}
          // </ul>
        ) : (
          // <p>No products available.</p>
        )} */}
      </div>
    </div>
  );
}
