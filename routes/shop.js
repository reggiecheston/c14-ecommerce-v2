const mysql = require("mysql2");
const express = require("express");
const router = express.Router();
const pool = mysql.createPool({
  host: "migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "twt71m1gjkxsldwb",
  password: "pudlh8d2d2g1lfqy",
  database: "m9j2buqujw9n6aqn",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

router.get("/shop", async (req, res) => {
  try {
    const { filter, sort } = req.query;
    let productsQuery = `SELECT products.*, categories.category_name FROM products
        JOIN categories ON products.category_id = categories.category_id`;

    if (filter !== "None") {
      productsQuery += " WHERE categories.category_name = ?";
    }

    if (sort === "price low to high") {
      productsQuery += " ORDER BY products.price ASC";
    } else if (sort === "price high to low") {
      productsQuery += " ORDER BY products.price DESC";
    }

    const promisePool = pool.promise();
    const [result] = await promisePool.query(productsQuery, [filter]);

    res.json(result);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// No need to explicitly end the connection or pool here

module.exports = router;
