const passport = require("passport");
const express = require("express");

const router = express.Router();

// /auth/google route - Present the use with consent screen (on google button click)
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.send("you are on /redirect route");
  }
);

module.exports = router;
