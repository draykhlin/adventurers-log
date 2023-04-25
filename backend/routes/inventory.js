const express = require('express')
const {
   getInventory,
   addItem,
   updateQty,
   deleteItem
} = require('../controllers/inventory')

const router = express.Router()
// const inventoryController = require('../controllers/inventory')

router.get('/', getInventory)

router.post('/', addItem)

router.patch('/:id', updateQty)

router.delete('/:id', deleteItem)

module.exports = router