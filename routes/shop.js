const mysql = require("mysql2");
const express = require("express");
const router = express.Router();

var pool = mysql.createPool({
  host: process.env.LOCALHOST,
  port: process.env.HOST,
  user: "root",
  password: process.env.MYPASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  //   consider more (maybe 30-50)
  connectionLimit: 10,
  queueLimit: 0,
});

router.get("/products", async (req, res) => {
  try {
    const { category, sort } = req.query;
    let productsQuery = `SELECT products.*, categories.category_name FROM products
        JOIN categories ON products.category_id = categories.category_id`;

    if (category) {
      productsQuery += `WHERE categories.category_name = '${category}'`;
    }

    if (sort === "Price: Low to High") {
      productsQuery += `ORDER BY products.price ASC`;
    } else if (sort === "Price: High to Low") {
      productsQuery += `ORDER BY products.price DESC`;
    }

    const [result] = await pool.promise().query(productsQuery);

    res.send(result);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
