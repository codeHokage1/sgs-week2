const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    _id: ObjectId,
    customerId: ObjectId,
    products: [
        {
           productId: ObjectId,
           quantity: Number
        }
      ],
    totalAmount: Number,
    delivered: Boolean,
    orderDate: Date,
    deliveryAddress: String,
    feedback: String
});

module.exports = mongoose.model('Order', orderSchema)