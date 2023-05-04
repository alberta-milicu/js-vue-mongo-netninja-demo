const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Friend = mongoose.model('Friend', friendSchema);
module.exports = Friend;