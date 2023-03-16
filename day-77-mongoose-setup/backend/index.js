console.log("Day-77");

import express from "express";
import mongoose from "mongoose";
import api_router from "./routes/api.js";

const app = express();
const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://blackbatjargalkhongorzul:DYZCelY7XuzRbqjM@khongoroo.shpcxi9.mongodb.net/test";

app.use(express.json());
app.use(api_router);

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.error(error));

app.get("/", (request, response) => {
  response.send(
    "<h1 style='text-align: center; background-color: black; color: pink; padding: 10px'>Day 77 - Mongoose Application</h1>"
  );
});

app.listen(PORT, () => {
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
