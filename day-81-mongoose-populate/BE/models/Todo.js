const mongoose = require("mongoose");

const todoShema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoShema);

module.exports = Todo;
