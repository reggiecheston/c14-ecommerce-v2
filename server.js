const express = require("express");
const router = express.Router();
require("dotenv").config();
const shopRouter = require("./routes/shop");
const cors = require("cors");

const app = express();

app.use(cors());

// router.get("/", (req, res) => {
//   res.send("hello world");
// });

// app not router
app.use("/", shopRouter);

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// }); // this helps with a cross origin error, which allows resticted resources on a web page.

// app.get("*", (req, res) => {});

module.exports = router;

const PORT = process.env.SERVERPORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
