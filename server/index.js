const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const keys = require("../config/keys");
const app = express(); // create express app

mongoose.connect(
  `mongodb+srv://admin-viktor:${keys.mongoDB.adminPassword}@clusterforpetprojects.7esmr.mongodb.net/usersRemindersApp?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
