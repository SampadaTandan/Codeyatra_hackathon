const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Changed from 'name' to 'username'
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Entrepreneur", "Other"], default: "Other" },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
