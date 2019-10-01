const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
    },
    price: { 
        type: Number, 
        required: true
    },
    quantity: { 
        type: Number, 
        required: true
    },
    category: {
        type: String,
        enum: ['celular','eletrodomestico','tv','videogame'],
        required: true,
        lowercase: true
    },
    insertedAt: { 
        type: Date, 
        default: Date.now
    }
});

module.exports = model('Product', ProductSchema);