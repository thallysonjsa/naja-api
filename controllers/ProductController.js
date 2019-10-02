const productService = require('../services/ProductService');

module.exports = {
    async index(req, res) {
        try {
            return res.json(await productService.index());
        } catch (error) {
            return res.status(500).json({error: error.message});
        } 
    }, 

    async store(req, res) {
       try {
            const { name, price, quantity, category, image } = req.body
            return res.json(await productService.store(name, price, quantity, category, image));
        } catch (error) {
            return res.status(400).json({error: error.message});
        } 
    },

    async remove(req, res) {
        try {
            const id = req.params.id;
            return res.json(await productService.remove(id));
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },

    async update(req, res) {
        try {
            const { id, quantity } = req.body;
            const type = req.query.type;
            return res.json(await productService.update(id, quantity, type));
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },

    async searchByCategory(req, res) {
        try {
            const category = req.query.category;
            return res.json(await productService.searchByCategory(category));
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}