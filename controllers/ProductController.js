const productService = require('../services/ProductService');

module.exports = {
    async index(req, res) {
        return res.json(await productService.index());
    }, 

    async store(req, res) {
        return res.json(await productService.store(req.body));
    },

    async remove(req, res) {
        const id = req.params.id;
        return res.json(await productService.remove(id));
    }
}