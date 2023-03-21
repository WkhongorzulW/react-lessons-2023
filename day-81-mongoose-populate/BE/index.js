const express = require("express");
const cors = require("cors");
const { default: mongoose, connect } = require("mongoose");
const Todo = require("./models/Todo");
const { request } = require("express");

const app = express();
const PORT = 8080;
const CONNECTION_STRING = `mongodb+srv://blackbatjargalkhongorzul:W7waJanVPvPYs7Pb@khongoroo.shpcxi9.mongodb.net/test`;

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response
    .status(200)
    .send(
      `<h1 style="text-align: center; background-color: black; color: hotpink; padding: 10px">Hello Day-81 File Upload Multer</h1>`
    );
});

app.get("/list", async (request, response) => {
  const result = await Todo.find({});
  response.status(200).json({
    data: result,
  });
});

app.put("/update", async (request, response) => {
  const body = request.body;

  const result = await Todo.updateMany(
    { name: body[1].name },
    { $set: { checked: body[0].checked } }
  );

  response.status(200).json({
    data: result,
  });
});

app.delete("/delete", async (request, response) => {
  const body = request.body;
  const result = await Todo.deleteMany(body);

  response.status(200).json({
    data: result,
  });
});

app.post("/create", async (request, response) => {
  const body = request.body;

  const result = await Todo.insertMany(body);

  response.status(200).json({
    data: result,
  });
});

app.listen(PORT, () => {
  mongoose
    .connect(CONNECTION_STRING)
    .then(() => console.log("Database successfully connected"))
    .catch((error) => console.error(error));
  console.log(`Application is running on http://localhost:${PORT}`);
});
