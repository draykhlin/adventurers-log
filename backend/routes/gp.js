const express = require('express')
const {
   getGp,
   updateGp
} = require('../controllers/gp')

const router = express.Router()

router.get('/', getGp)

router.patch('/:id', updateGp)

module.exports = router