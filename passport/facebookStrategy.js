const passport      = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User          = require('../models/User');

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_ID,
  clientSecret: process.env.FACEBOOK_SECRET,
  callbackURL: "/auth/facebook/callback",
  profileFields: ['id', 'email']
},
async (accessToken, refreshToken, profile, done) => {
  const res = profile._json
  const user = await User.findOne({ facebookId: res.id })

  if(user) {
    return done(null, user)
  }

  const newUser = await User.create({
    facebookId: res.id,
    email: res.email
  })

  done(null, newUser)
}
))