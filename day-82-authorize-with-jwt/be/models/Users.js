const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
