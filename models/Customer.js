const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    _id: ObjectId,
    name: String,
    email: String,
    phone: String,
    password: String
});

module.exports = mongoose.model('Customer', customerSchema)