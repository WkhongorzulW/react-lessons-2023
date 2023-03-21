const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const todoRouter = require("./routes/todo-routes");
const categoryRouter = require("./routes/category-routes");

const app = express();
const PORT = 8080;
const CONNECTION_STRING = `mongodb+srv://blackbatjargalkhongorzul:W7waJanVPvPYs7Pb@khongoroo.shpcxi9.mongodb.net/test`;

app.use(express.json());
app.use(cors());
app.use("/todo", todoRouter);
app.use("/category", categoryRouter);

app.get("/", (request, response) => {
  response
    .status(200)
    .send(
      `<h1 style="text-align: center; background-color: black; color: hotpink; padding: 10px">Hello Day-81 File Upload Multer</h1>`
    );
});

app.listen(PORT, () => {
  mongoose
    .connect(CONNECTION_STRING)
    .then(() => console.log("Database successfully connected"))
    .catch((error) => console.error(error));
  console.log(`Application is running on http://localhost:${PORT}`);
});
