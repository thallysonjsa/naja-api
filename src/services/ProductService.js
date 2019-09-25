const Product = require('../models/Product');

module.exports = {
    async index() {
       try {
            const products = await Product.find();
            return products;
       } catch (error) {
            return {error: `Erro na consulta de produtos!`};
       }
    },

    async store() {
        try {
            const product = await Product.create(req.body);
            return product;
        } catch (error) {
            return {error: `Erro na criação do produto!`};
        }
    },

    async remove(id) {
        try {
            const product = await Product.findOneAndDelete({id: id});
            if (!product) return {error: `Produto não encontrado!`};
            return product;
        } catch (error) {
            return {error: `Erro na remoção do produto!`};
        }
    }
    
}