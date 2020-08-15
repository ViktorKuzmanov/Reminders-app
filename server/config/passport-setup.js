const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientId,
      clientSecret: keys.google.clientSecret,
      callbackURL: "http://localhost:5000/redirect",
    },
    (accessToken, refreshToken, profile, cb) => {}
  )
);
