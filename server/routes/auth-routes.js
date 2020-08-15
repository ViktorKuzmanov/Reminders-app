const passport = require("passport");
const express = require("express");

const router = express.Router();

// /auth/google route - Present the use with consent screen (on google button click)
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

module.exports = router;
