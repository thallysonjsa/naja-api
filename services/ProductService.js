const Product = require('../models/Product');
const Util = require('../util/Util');

module.exports = {
    async index() {
        const products = await Product.find();
        return products;
    },

    async store(name, price, quantity, category) {
        const product = await Product.create({name, price, quantity, category});
        return product;
    },

    async remove(id) { 
        const product = await Product.findOneAndDelete({ id: id });
        return product;
    },

    async update(id, quantity, type) {
        const product = await Product.findById(id);
        if (type == 'increase') Util.increase(product, quantity);    
        else Util.decrease(product, quantity);    
        await product.save();
        return product;
    },

    async searchByCategory(category) {
        const products = await Product.find({ category: category });
        return Util.sort(products);
    }
    
}