const mongoose = require('mongoose')

const SpellsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    index: {
        type: String
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Spells', SpellsSchema)