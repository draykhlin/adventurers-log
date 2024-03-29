const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/inventory')
  }
  res.render('login', {
    title: 'Login'
  })
}
  
exports.postLogin = (req, res, next) => {
  const validationErrors = []
  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
  if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' })

  if (validationErrors.length) {
    // req.flash('errors', validationErrors)
    return res.redirect('/login')
  }
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    // if (!user) {
    //   // req.flash('errors', info)
    //   return res.redirect('/login')
    // }
    console.log(user)
    req.logIn(user, (err) => {
      console.log(err)
      if (err) { 
        res.status(500).send('error authenticating')
        return next(err) 
        
      }
      // req.flash('success', { msg: 'Success! You are logged in.' })
      // res.redirect(307, '/inventory')
      res.status(200).send('success')
    })
  })(req, res, next)

  return
}

exports.postGuestLogin = (req, res, next) => {
  const validationErrors = []
  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
  if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' })

  if (validationErrors.length) {
    // req.flash('errors', validationErrors)
    return res.redirect('/login')
  }
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    // if (!user) {
    //   // req.flash('errors', info)
    //   return res.redirect('/login')
    // }
    console.log(user)
    req.logIn(user, (err) => {
      console.log(err)
      if (err) { return next(err) }
      // req.flash('success', { msg: 'Success! You are logged in.' })
      // res.redirect(307, '/inventory')
      res.status(200).send('success')
    })
  })(req, res, next)

  return
}

exports.logout = (req, res) => {
  res.send('Logging out')
  req.logout(() => {
    console.log('User has logged out.')
    // res.redirect('/')
  })
  req.session.destroy((err) => {
    if (err) console.log('Error : Failed to destroy the session during logout.', err)
    // req.user = null
    res.clearCookie('connect.sid')
    res.send('Logged out')
    // res.redirect('/')
  })
}


exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect('/inventory')
  }
  // res.render('signup', {
  //   title: 'Create Account'
  // })
}

exports.postSignup = (req, res, next) => {
  console.log(req.body)
  const validationErrors = []

  // if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })

  // if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })

  // if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })

  // if (validationErrors.length) {
  //   // req.flash('errors', validationErrors)
  //   return res.redirect('/')
  // }

  // req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

  const user = new User({
    email: req.body.email,
    password: req.body.password,
    currencies: {
        gp: 0,
        cp: 0,
        sp: 0,
        pp: 0
    }
  })
  

  User.findOne({$or: [
    {email: req.body.email},
    // {userName: req.body.userName}
  ]}, (err, existingUser) => {
    if (err) { return next(err) }
    // if (existingUser) {
    //   // req.flash('errors', { msg: 'Account with that email address or username already exists.' })
    //   return res.redirect('https://adventurerslogapp.onrender.com/inventory/signup')
    // }
    user.save((err) => {
      res.send('Saving user')
      if (err) { return next(err) }
      req.logIn(user, (err) => {
        if (err) {
          return next(err)
        }
      })
    })  
  })

  // res.redirect('https://adventurerslogapp.onrender.com/inventory')

}