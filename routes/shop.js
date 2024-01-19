const mysql = require("mysql2");
var connection = mysql.createConnection(process.env.JAWSDB_URL);
const express = require("express");
const router = express.Router();

var connection = mysql.createConnection(process.env.JAWSDB_URL);

router.get("/shop", async (req, res) => {
  try {
    const { filter, sort } = req.query;
    let productsQuery = `SELECT products.*, categories.category_name FROM products
        JOIN categories ON products.category_id = categories.category_id`;

    if (filter !== "None") {
      productsQuery += ` WHERE categories.category_name = '${filter}'`;
    }

    if (sort === "price low to high") {
      productsQuery += ` ORDER BY products.price ASC`;
    } else if (sort === "price high to low") {
      productsQuery += ` ORDER BY products.price DESC`;
    }

    const [result] = await connection.promise().query(productsQuery);

    res.send(result);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).send("Internal Server Error");
  }
});

connection.end();

module.exports = router;
