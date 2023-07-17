const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
// const connection = require('./database')
// const User = connection.models.User
const User = require('../models/User')

/////////////////////////
// ---vvv--zach---vvv---
// const verifyCallback = (username, password, done)
// const strategy = new LocalStrategy()
////////////////////////

module.exports = function (passport) {
   passport.use('local', new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
     User.findOne({ email: email.toLowerCase() }, (err, user) => {
      // error with DB
       if (err) { 
        return done(err) 
       }
       if (!user) {
         return done(null, false, { 
            msg: `Email ${email} not found.` 
         })
       }
       if (!user.password) {
         return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' })
       }
       user.comparePassword(password, (err, isMatch) => {
         if (err) { return done(err) }
         if (isMatch) {
           return done(null, user)
         }
         return done(null, false, { msg: 'Invalid email or password.' })
       })
     })
   }))
   
 
   passport.serializeUser((user, done) => {
     return done(null, user.id)
   })
 
   passport.deserializeUser((id, done) => {
     User.findById(id, (err, user) => done(err, user))
   })
 }