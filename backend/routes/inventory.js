const express = require('express')
const router = express.Router()
const {
   getInventory,
   addItem,
   updateQty,
   deleteItem
} = require('../controllers/inventory')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, getInventory)
router.post('/', addItem)
router.patch('/:id', updateQty)
router.delete('/:id', deleteItem)

module.exports = router