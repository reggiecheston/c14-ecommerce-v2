import React, { useState, useEffect } from "react";
import "../styles/shop.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Shop = () => {
  // Use useLocation to access the passed state
  const location = useLocation();
  const navigate = useNavigate();

  const [productContent, setProductContent] = useState([]);
  const [filter, setFilter] = useState(
    location.state ? location.state.filter : "None"
  );
  const [sort, setSort] = useState("None");
  const [header, setHeader] = useState("All Products");
  const [bannerClass, setBannerClass] = useState("heading__banner--1");

  const banners = {
    None: "heading__banner--1",
    "Accent Chairs": "heading__banner--2",
    Sofas: "heading__banner--3",
    "Coffee Tables": "heading__banner--4",
    Lamps: "heading__banner--5",
  };

  useEffect(() => {
    const fetchData = async () => {
      // Check if there is state and set the filter accordingly
      if (
        location.state &&
        location.state.filter &&
        location.state.filter !== "None"
      ) {
        setFilter(location.state.filter);
        setHeader(location.state.filter);
        setBannerClass(banners[location.state.filter]);
      } else {
        // Handle the case when filter is not specified, set default values
        setFilter("None");
        setHeader("All Products");
        setBannerClass(banners.None);
      }

      // Fetch data from server
      try {
        const response = await axios.get(
          `http://localhost:3000/shop${
            filter !== "none" ? "?filter=" + filter : ""
          }${
            sort !== "none"
              ? filter !== "none"
                ? "&sort=" + sort
                : "?sort=" + sort
              : ""
          }`
        );
        setProductContent(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching product data: ", error.response.data);
      }
    };

    fetchData();
  }, [filter, sort, location.state]); // Re-run effect when filter or sort changes

  // Make sure this is called before page load
  const handleFilterChange = async (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    setBannerClass(banners[selectedFilter]);
    if (selectedFilter !== "None") {
      setHeader(selectedFilter);
    } else setHeader("All Products");

    // Use navigate to navigate with the updated state
    navigate("/shop", { state: { filter: selectedFilter } });
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="main">
      {/* <h1>Shop</h1> */}
      <section className="heading">
        <div className={bannerClass}></div>
        <div className="heading__header">
          <h1>{header}</h1>
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
              <option value="None">None</option>
              <option value="Accent Chairs">Accent Chairs</option>
              <option value="Sofas">Sofas</option>
              <option value="Coffee Tables">Coffee Tables</option>
              <option value="Lamps">Lamps</option>
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
              <option value="None">None</option>
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
                <p>{product.product_name}</p>
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
