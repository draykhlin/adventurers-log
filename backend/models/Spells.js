const mongoose = require('mongoose')

const SpellsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    index: {
        type: String
    }
})

module.exports = mongoose.model('Spells', SpellsSchema)