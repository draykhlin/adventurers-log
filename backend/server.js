const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
// const connectDB = require('./config/database')

// const mainRoutes = require('./routes/main')
const inventoryRoutes = require('./routes/inventory')
const gpRoutes = require('./routes/gp')
const spellsRoutes = require('./routes/spells')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')

// connectDB()
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
     // listen for requests
     app.listen(process.env.PORT, () => {
         console.log(`connected to DB & listening on port ${process.env.PORT}`)
     })
 })
 .catch((err) => {
     console.log(err)
 })


// express
const app = express()

// middleware
app.use(express.static('frontend/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use('/api/Auth', require('./Auth/Route'))

// routes
app.use('/api/inventory', inventoryRoutes)
app.use('/api/gp', gpRoutes)
app.use('/api/spells', spellsRoutes)

// sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
      }),
    })
  )

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())