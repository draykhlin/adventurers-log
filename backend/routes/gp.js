const express = require('express')
const router = express.Router()
const {
   getGp,
   updateGp
} = require('../controllers/gp')
const { ensureAuth } = require('../middleware/auth')

router.get('/', getGp)
router.patch('/', updateGp)

module.exports = router