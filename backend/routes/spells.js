const express = require('express')
const {
   getSpells,
   // addItem,
   // updateQty,
   // deleteItem
} = require('../controllers/spells')

const router = express.Router()
// const inventoryController = require('../controllers/inventory')

router.get('/', getSpells)

// router.post('/', addItem)

// router.patch('/:id', updateQty)

// router.delete('/:id', deleteItem)

module.exports = router