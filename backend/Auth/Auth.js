const User = require('../models/User')

exports.register = async (req, res, next) => {
   const {username, password} = req.body
   if (password.length < 4) {
      return res.status(400).json({message: "Password must be at least 4 characters long."})
   }
   try {
      await User.create({
         username,
         password
      }).then(user =>
            res.status(200).json({
               message: "User successfully created",
               user,
      }))
   } catch (err) {
      res.status(401).json({
         message: "User creation not successful",
         error: err.message
      })
   }
}

exports.login = async (req, res, next) => {
   const {username, password} = req.body
   if (!username || !password) {
      return res.status(400).json({
         message: "Username or password is empty",
      })
   }
   try {
      const user = await User.findOne({username, password})
      if (!user) {
         res.status(401).json({
            message: "Login unsuccessful",
            error: "User not found"
         })
      } else {
         res.status(200).json({
            message: 'Login successful',
            user,
         })
      }
   } catch {
      res.status(400).json({
         message: "Unknown error occured",
         error: error.message
      })
   }
}