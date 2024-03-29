const express = require('express')
const {register, login, deleteUser} = require('./Auth')

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/deleteUser').delete(deleteUser)

module.exports = router