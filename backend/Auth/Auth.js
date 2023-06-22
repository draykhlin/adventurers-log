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
   } catch (error) {
      res.status(401).json({
         message: "User creation not successful",
         error: error.message
      })
   }
}