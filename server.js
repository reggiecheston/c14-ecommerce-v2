const express = require("express");
const router = express.Router();
require("dotenv").config();
const shopRouter = require("./routes/shop");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/humil", shopRouter);

module.exports = app;

const PORT = process.env.SERVERPORT || 3001;

const Timeout = 60000;

app.timeout = Timeout;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
