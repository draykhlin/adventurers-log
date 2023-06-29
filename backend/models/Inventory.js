const mongoose = require('mongoose')

const InventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    notes: {
        type: String,
        required: false,
    },
    // userId: {
    //     type: String,
    //     required: true
    // }
})

module.exports = mongoose.model('Inventory', InventorySchema)