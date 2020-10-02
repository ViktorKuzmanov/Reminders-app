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
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
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
  const newReminder = req.body.reminderText;
  const currentUser = new User(req.user);
  // Covert to object so we can access its properties
  const googleId = currentUser.toObject().googleId;
  const prevReminders = currentUser.toObject().reminders;
  User.findOneAndUpdate(
    { googleId: googleId },
    { reminders: [...prevReminders, { text: newReminder }] },
    () => {
      console.log("new reminder is added");
    }
  ).then(() => {
    res.redirect("/allReminders");
  });
});

app.get("/allReminders", (req, res) => {
  const currentUser = new User(req.user).toObject();
  currentUser.reminders.forEach((e) => console.log(e));
  res.json({ reminders: currentUser.reminders });
});

app.post("/deleteReminder", (req, res) => {
  console.log(
    "/deleteReminder idOfReminderToDelete = " + req.body.idOfReminderToDelete
  );
  const idOfReminderToDelete = req.body.idOfReminderToDelete;
  const currentUser = new User(req.user);
  const prevReminders = currentUser.toObject().reminders;
  const newReminders = prevReminders.filter(
    (reminder) => reminder._id != idOfReminderToDelete
  );
  const googleId = currentUser.toObject().googleId;
  User.findOneAndUpdate(
    { googleId: googleId },
    { reminders: newReminders },
    () => {
      console.log("reminders array is updated (deleted reminder)");
    }
  ).then(() => res.json({ reminders: newReminders }));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
