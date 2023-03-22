const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/Users");
const jwt = require("jsonwebtoken");

const adminRouter = express.Router();

adminRouter.post("/register", async (request, response) => {
  const { email, password } = request.body;

  if (email && password) {
    const oldUser = await User.findOne({ email: email });

    if (oldUser) {
      return response.json({ data: "Already registered!!!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    User.create({ email: email, password: hashedPassword })
      .then((data) => {
        response.status(201).json({
          message: "Хэрэглэгч амжилттай бүртгэгдлээ.",
          email: data.email,
        });
        return;
      })
      .catch((error) => {
        return response.status(500).json({
          success: false,
          error,
        });
      });
  } else {
    return response.json({
      data: "Input field is empty",
    });
  }
});

adminRouter.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!(email && password)) {
      response.status(400).json({
        message: "Утгуудыг бүрэн оруулна уу.",
        updated: 1,
        email: email,
        password: password,
      });
      return;
    }

    const user = await User.findOne({ email: email });

    // hereglegch oldvol
    if (user) {
      const isMatch = await bcrypt.compare(password, user?.password);
      if (user && isMatch) {
        const jwtBody = {
          user_id: user._id,
          email: email,
        };
        const token = jwt.sign(jwtBody, "MySuperDuperPrivateKey", {
          expiresIn: "2h",
        });
        response.status(200).json({
          success: true,
          status: "Амжилттай нэвтэрлээ",
          data: user,
          token: token,
        });
        return;
      }
    }

    // password buruu baival
    else {
      response.status(400).json({
        success: false,
        status: "Нууц үг нэр хоорондоо таарахгүй байна.",
      });
      return;
    }
  } catch (error) {
    response.status(500).json({
      data: "Алдаа гарлаа",
      error: error,
    });
  }
});

module.exports = adminRouter;
