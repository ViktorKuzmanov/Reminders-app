const path = require("path");
const keys = require("./config/keys");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");
const bodyParser = require("body-parser");
const passport = require("passport");
const User = require("./models/user-model");
const cookieSession = require("cookie-session");

const app = express(); // create express app

const passportSetup = require("./config/passport-setup");

mongoose.connect(
  `mongodb+srv://admin-viktor:${keys.mongoDB.adminPassword}@clusterforpetprojects.7esmr.mongodb.net/usersRemindersApp?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use(express.urlencoded());
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.get("/home", (req, res) => {
  res.send("this is home");
});

app.post("/addReminder", (req, res) => {
  console.log("addReminder = " + req.body.reminderText);
  const u = new User(req.user);
  console.log(u.toObject()._id);
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
