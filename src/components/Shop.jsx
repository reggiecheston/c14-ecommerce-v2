import React, { useState, useEffect } from "react";
import "../styles/shop.css";
import axios from "axios";

const Shop = () => {
  const [productContent, setProductContent] = useState([]);
  const [filter, setFilter] = useState("none");
  const [sort, setSort] = useState("none");

  useEffect(() => {
    // Fetch data from server
    axios
      .get(
        `http://localhost:3000/shop${
          filter !== "none" ? "?filter=" + filter : ""
        }${
          sort !== "none"
            ? filter !== "none"
              ? "&sort=" + sort
              : "?sort=" + sort
            : ""
        }`
      )
      .then((response) => {
        setProductContent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data: ", error.response.data);
      });
  }, [filter, sort]); // Re-run effect when filter or sort changes

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="main">
      {/* <h1>Shop</h1> */}
      <section className="heading">
        <div className="heading__header">
          <h2>All Products</h2>
        </div>
        <div className="dropdowns">
          <div className="dropdown">
            <label htmlFor="filter">Filter:</label>
            <select
              name="filter"
              id="filter"
              onChange={handleFilterChange}
              value={filter}
            >
              <option value="none">None</option>
              <option value="accent chairs">Accent Chairs</option>
              <option value="sofas">Sofas</option>
              <option value="coffee tables">Coffee Tables</option>
              <option value="lamps">Lamps</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="sort">Sort:</label>
            <select
              name="sort"
              id="sort"
              onChange={handleSortChange}
              value={sort}
            >
              <option value="none">None</option>
              <option value="price low to high">Price: Low to High</option>
              <option value="price high to low">Price: High to Low</option>
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
