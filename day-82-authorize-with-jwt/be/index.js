const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");
const adminRouter = require("./routes/admin-api");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

app.use(express.json());
app.use(cors());
app.use(adminRouter);
app.use(apiRouter);

app.get("/", (request, response) => {
  response
    .status(200)
    .send(
      `<h1 style="text-align: center; background-color: black; color: hotpink; padding: 10px">Hello Day-82  ~  Authentication, Authorization</h1>`
    );
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGODB_CONNECTION_STRING)
    .then(() => console.log("Database successfully connected"))
    .catch((error) => console.error(error));
  console.log(`Application is running on http://localhost:${PORT}`);
});
