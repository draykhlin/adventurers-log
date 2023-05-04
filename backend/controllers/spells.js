const Spells = require('../models/Spells')
const mongoose = require('mongoose')


const getSpells = async (req,res) => {
   const spellsFromServer = await Spells.find()
   res.status(200).json(spellsFromServer)
}

module.exports = {
   getSpells,
   // addItem,
   // updateQty,
   // deleteItem
}