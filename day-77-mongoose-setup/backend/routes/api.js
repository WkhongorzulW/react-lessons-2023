import express from "express";
import User from "../models/Users.js";
const api_router = express.Router();

api_router.get("/users", async (request, response) => {
  const result = await User.find({});
  console.log(result);
  response.json({ data: result });
});

api_router.post("/user", async (request, response) => {
  const body = request.body;

  const newUser = new User(body);

  const result = await newUser.save();
  console.log(result);

  response.json({
    data: result,
  });
});

api_router.delete("/user", async (request, response) => {
  const body = request.body;
  console.log(body);

  const result = await User.findOneAndDelete({ _id: body.id });

  response.json({ data: result });
});

export default api_router;
