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
  passport.authenticate("google", { failureRedirect: "/home" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/?isLoggedIn=true");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
});

router.get("/isLoggedIn", (req, res) => {
  res.json({ isLoggedIn: req.isAuthenticated() });
});

module.exports = router;
