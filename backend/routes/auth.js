const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
// router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

router.get('/check', (req, res) => {
   if (req.isAuthenticated()) {
      return res.json({isAuthenticated: true})
   } else {
      return res.json({isAuthenticated: false})
   }
})

module.exports = router




// const homeController = require('../controllers/home')
// const inventoryController = require('../controllers/inventory')
// const spellsController = require('../controllers/spells')

// router.get('/', homeController.getIndex)
// // router.get('/inventory', inventoryController.getInventory)
// // router.get('/spells', spellsController.getSpells)

// module.exports = router