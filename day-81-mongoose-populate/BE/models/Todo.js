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
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const Todo = mongoose.model("Todo", todoShema);

module.exports = Todo;
