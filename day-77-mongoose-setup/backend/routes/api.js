import express from "express";
import User from "../models/Users.js";
const api_router = express.Router();

api_router.get("/users", async (request, response) => {
  const result = await User.find({});
  console.log(result);
  response.json({ data: result });
});

/*-------------- GET user by id---------------*/
api_router.get("/user", async (request, response) => {
  const userId = request.query.id;
  console.log(userId);

  const user = await User.findOne({ _id: userId });

  response.json({
    data: user,
  });
});

/*-------------- GET user by email---------------*/
api_router.get("/userByEmail", async (request, response) => {
  const email = request.query.email;
  console.log(email);

  const foundUser = await User.find({ email: email }, "_id email name", {
    sort: { lastLogin: 1 },
  }).exec();

  response.json({
    data: foundUser,
  });
});

api_router.get("/userGetEmail", async (request, response) => {
  const userEmail = request.query.email;

  const foundUser = await User.findUserByEmail(userEmail);

  response.json({ data: foundUser });
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

api_router.put("/updateUser", async (request, response) => {
  const result = await User.updateOne(
    { email: "khongoroo@gmail.com" },
    { $set: { lastLogin: Date.now() } }
  );

  response.json({ data: result });
});

export default api_router;
