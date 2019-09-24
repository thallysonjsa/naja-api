const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
        lowercase: true
    },
    price: { 
        type: Number, 
        required: true
    },
    quantity: { 
        type: Number, 
        required: true
    },
    insertedAt: { 
        type: Date, 
        default: Date.now
    }
});

module.exports = model('Product', ProductSchema);