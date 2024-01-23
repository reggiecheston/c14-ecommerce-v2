const express = require("express");
const router = express.Router();
require("dotenv").config();
const shopRouter = require("./routes/shop");

const app = express();

app.use("/", shopRouter);

// app.get("*", (req, res) => {});

module.exports = router;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
