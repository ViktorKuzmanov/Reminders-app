const path = require("path");
const keys = require("./config/keys");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");
const app = express(); // create express app

const passportSetup = require("./config/passport-setup");

mongoose.connect(
  `mongodb+srv://admin-viktor:${keys.mongoDB.adminPassword}@clusterforpetprojects.7esmr.mongodb.net/usersRemindersApp?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use("/auth", authRoutes);

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
