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

router.put('/updateQty', updateQty)

router.delete('/deleteItem', deleteItem)

module.exports = router