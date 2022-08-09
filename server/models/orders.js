const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const ordersSchema = mongoose.Schema({
    orderNo: {
        type: Number,
        required: true,
    },
    customer:{
        type: "String",
        required: true
    },
    OrderDate: {
        type: Date,
        default: Date.now
    },
    OrderDone: {
        type: Boolean,
        required: true
    },
    products: [
        {
            productId: {
                type: String,
                required: true
            },
            qty: {
                type: Number,
                required: true
            }
        }
    ],
});

//different collection example, users, products, orders
module.exports = mongoose.model('orders', ordersSchema);