const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const transactionRoute = require("./routes/transaction.route");
const productRoute = require("./routes/product.route");

const app = express();
const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

app.use(express.json());
app.use(cors());
app.use("/transaction", transactionRoute);
app.use("/product", productRoute);

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      `<h1 style="text-align: center; background-color: black; color: hotpink; padding: 10px">Day-86 MongoDB Transaction</h1>`
    );
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGODB_CONNECTION_STRING)
    .then(() => console.log("Database successfully connected"))
    .catch((error) => console.error(error));
  console.log(`Application is running on http://localhost:${PORT}`);
});
