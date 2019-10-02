const express = require('express');
const routes = express.Router();
const controller = require('../controllers/UserController');
const passport = require('passport');
const passportConf = require('../passport');
const passportGoogle = passport.authenticate('googleToken', { session: false });

routes.route('/oauth/google')
  .post(passportGoogle, controller.googleOAuth);

module.exports = routes;