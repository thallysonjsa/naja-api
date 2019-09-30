const express = require('express');
const routes = express.Router();

const ProductController = require('../controllers/ProductController');

routes.get('/', ProductController.index);
routes.post('/create', ProductController.store);
routes.delete('/delete', ProductController.remove);
routes.put('/update', ProductController.update);
routes.get('/search', ProductController.searchByCategory);

module.exports = routes;