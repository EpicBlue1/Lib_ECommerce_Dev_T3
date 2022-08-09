const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    ProductProperties: [
        {
            ProductProperty: {
                type: String,
                required: true,
            },
            totalAvail: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            discount: {
                type: Number,
                required: true
            }
        }
    ],
    description: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ]
});

module.exports = mongoose.model('lensesnaccessories', productSchema);