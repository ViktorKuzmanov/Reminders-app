const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientId,
      clientSecret: keys.google.clientSecret,
      callbackURL: "http://localhost:5000/auth/google/redirect",
    },
    // This callback function is fired when user is redirected to callback route
    function (accessToken, refreshToken, profile, done) {
      console.log("function is executed");
    }
  )
);

// // check if user already exists in our database
// User.findOne({ googleId: profile.id }).then((currentUser) => {
//   if (currentUser) {
//     // we already have the user in database
//     done(null, currentUser);
//   } else {
//     // if we don't already have the user create it in our Database
//     new User({
//       username: profile.displayName,
//       googleId: profile.id,
//       thumbnail: profile._json.picture,
//     })
//       .save()
//       .then((newUser) => {
//         done(null, newUser);
//       });
//   }
// });
