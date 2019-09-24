const express = require('express');
const routes = express.Router();

const ProductService = require('../services/ProductService');

routes.get('/', ProductService.index);
routes.post('/create', ProductService.store);
//routes.put('/update', ProductService.update);
//routes.delete('/delete', ProductService.remove);

module.exports = routes;