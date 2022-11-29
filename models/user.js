const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: String,
      enum: ["nakes", "dokter"],
      required: [true, "Please specify user role"]
    },
  })
);

module.exports = User;
