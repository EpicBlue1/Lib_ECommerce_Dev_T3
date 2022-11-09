const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orders: {
    type: Array,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

//different collection example, users, products, orders
module.exports = mongoose.model("order", orderSchema);
