const express = require('express');
const routes = express.Router();
const UserService = require('../services/UserService');

routes.get('/users', UserService.index);
routes.post('/users', UserService.store);
//routes.put('/users', UserService.update);
//routes.delete('/users', UserService.remove);

module.exports = routes;