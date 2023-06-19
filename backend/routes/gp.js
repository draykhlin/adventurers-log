const express = require('express')
const {
   getGp,
   createGp,
   updateGp
} = require('../controllers/gp')

const router = express.Router()

router.get('/', getGp)

router.post('/', createGp)

router.patch('/:id', updateGp)

module.exports = router