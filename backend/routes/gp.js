const express = require('express')
const router = express.Router()
const {
   getGp,
   createGp,
   updateGp
} = require('../controllers/gp')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, getGp)
router.post('/', createGp)
router.patch('/:id', updateGp)

module.exports = router