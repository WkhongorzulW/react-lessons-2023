import express from "express";
import helloRouter from "./routes/api";

const app = express();

const PORT = 8080;

app.use(helloRouter);

app.get("/", (request, response) => {
  response
    .status(200)
    .send(
      `<h1 style="text-align: center; background-color: black; color: hotpink; padding: 10px">Day 79 - Babel</h1>`
    );
});

app.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}`);
});
