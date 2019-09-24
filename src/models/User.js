const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
        lowercase: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true
    },
    password: { 
        type: String, 
        required: true, 
        select: false 
    },
    insertedAt: { 
        type: Date, 
        default: Date.now
    }
});

module.exports = model('User', UserSchema);