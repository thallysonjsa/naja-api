const passport = require('passport');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const User = require('./models/User');

passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: '296627314306-n5v80i3gjk5tnjtqbdv3dh46po08qekp.apps.googleusercontent.com',
    clientSecret: '9mVYNbbvZv8Ntw5c4bNQUJSe'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const existingUser = await User.findOne({ "google.id": profile.id });

        if (existingUser) {
            console.log('Usuário já cadastrado!');
            return done(null, existingUser);
        }

        const newUser = new User({
            method: 'google',
            google: {
              id: profile.id,
              email: profile.emails[0].value
            }
          });
    
        await newUser.save();
        done(null, newUser);

    } catch(error) {
        done(error, false, error.message);
  }
}));