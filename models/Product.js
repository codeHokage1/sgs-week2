const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: ObjectId,
    name: String,
    description: String,
    price: Number,
    amountInStock: Number,
    category: [String],
    discount: Number
});

module.exports = mongoose.model('Product', productSchema)