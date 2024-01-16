import React, { useState, useEffect } from "react";
import "../styles/shop.css";
import axios from "axios";

const Shop = () => {
  const [productContent, setProductContent] = useState([]);

  useEffect(() => {
    // Fetch data from server
    axios
      .get("/products")
      .then((response) => {
        setProductContent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data: ", error);
      });
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div className="main">
      {/* <h1>Shop</h1> */}
      <section className="heading">
        <div className="heading__header">
          <h2>All Products</h2>
        </div>
        <div className="dropdowns">
          <div className="dropdown">
            <label for="filter">Filter:</label>
            <select name="filter" id="filter">
              <option value="none">None</option>
              <option value="accent-chairs">Accent Chairs</option>
              <option value="sofas">Sofas</option>
              <option value="coffee-tables">Coffee Tables</option>
              <option value="lamps">Lamps</option>
            </select>
          </div>
          <div className="dropdown">
            <label for="sort">Sort:</label>
            <select name="sort" id="sort">
              <option value="none">None</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-low-to-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>
      <ul className="grid">
        {productContent.map((product) => (
          <li key={product.product_id} className="grid__item">
            <a href="/">
              <div>
                <img
                  className="grid__item--image"
                  src={product.image}
                  alt={product.alt}
                />
              </div>
              <div className="grid__item--name-price">
                <p>
                  {product.name} - {product.color}
                </p>
                <p>${product.price}</p>
              </div>
              <div className="grid__item--description">
                <p>{product.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
