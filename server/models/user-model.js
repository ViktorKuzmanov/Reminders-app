const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  googleId: String,
  reminders: [{ text: String }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
