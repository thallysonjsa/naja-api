const express = require('express');
const routes = express.Router();
const authMiddleware = require('../middlewares/AuthMiddleware');

const ProductController = require('../controllers/ProductController');

routes.get('/', authMiddleware, ProductController.index);
routes.post('/', authMiddleware, ProductController.store);
routes.delete('/', authMiddleware, ProductController.remove);
routes.put('/', authMiddleware, ProductController.update);
routes.get('/search', authMiddleware, ProductController.searchByCategory);

module.exports = routes;