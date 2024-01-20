const express = require("express");
const router = express.Router();
require("dotenv").config();
const shopRouter = require("./routes/shop");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/", shopRouter);

module.exports = app;

const PORT = process.env.SERVERPORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
