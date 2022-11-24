const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: {
      type: String,
      enum: ["nakes", "dokter"],
      required: [true, "Please specify user role"]
    },
  })
);

module.exports = User;
