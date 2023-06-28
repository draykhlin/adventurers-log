const express = require('express')
const router = express.Router()
const {
   getSpells,
   addSpell,
   updateSpell,
   deleteSpell
} = require('../controllers/spells')

router.get('/', getSpells)
router.post('/', addSpell)
router.patch('/:id', updateSpell)
router.delete('/:id', deleteSpell)

module.exports = router