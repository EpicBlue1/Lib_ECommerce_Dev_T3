const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
{
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    ShippingAddress:{
        stAddress: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        province: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        }
    },
    //user Id's orders
    //order object ids with the users id
    prevOrders: [
        {
            type: String,
        }
    ],
    userPassword: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//different collection example, users, products, orders
module.exports = mongoose.model('users', userSchema)