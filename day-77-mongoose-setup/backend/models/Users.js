import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  createdOn: Date,
  modifiedOn: { type: Date, default: Date.now },
  lastLogin: Date,
});

userSchema.statics.findUserByEmail = function (userEmail) {
  return this.find({ email: userEmail }, "_id name email", {
    sort: "modifiedOn",
  });
};

const User = mongoose.model("user", userSchema);

export default User;
