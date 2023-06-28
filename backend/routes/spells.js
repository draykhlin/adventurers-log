const express = require('express')
const router = express.Router()
const {
   getSpells,
   addSpell,
   updateSpell,
   deleteSpell
} = require('../controllers/spells')
const { ensureAuth } = require('../middleware/auth')

router.get('/', getSpells)
router.post('/', addSpell)
router.patch('/:id', updateSpell)
router.delete('/:id', deleteSpell)

module.exports = router