const mongoose = require('mongoose')

const GpSchema = new mongoose.Schema({
    currency: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        default: 0,
    },
})

module.exports = mongoose.model('Gp', GpSchema)