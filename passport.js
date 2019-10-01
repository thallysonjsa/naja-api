const passport = require('passport');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const User = require('./models/user');

passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: '296627314306-n5v80i3gjk5tnjtqbdv3dh46po08qekp.apps.googleusercontent.com',
    clientSecret: '9mVYNbbvZv8Ntw5c4bNQUJSe'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const existingUser = await User.findOne({ "google.id": profile.id });
    if (existingUser == null)
        return done('error":"Não autorizado"')

    } catch(error) {
        done(error, false, error.message);
  }
}));