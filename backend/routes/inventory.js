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

//may need to be patch instead of put
router.put('/:id', updateQty)

router.delete('/:id', deleteItem)

module.exports = router