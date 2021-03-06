const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 16
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('user',userSchema);