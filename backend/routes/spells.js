const express = require('express')
const {
   getSpells,
   addSpell,
   updateSpell
   // deleteItem
} = require('../controllers/spells')

const router = express.Router()
// const inventoryController = require('../controllers/inventory')

router.get('/', getSpells)

router.post('/', addSpell)

router.patch('/:id', updateSpell)

// router.delete('/:id', deleteItem)

module.exports = router