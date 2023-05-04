const mongoose = require('mongoose')

const SpellsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    index: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Spells', SpellsSchema)