const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/database')

// routes
// const mainRoutes = require('./routes/main')
const inventoryRoutes = require('./routes/inventory')
const gpRoutes = require('./routes/gp')
const spellsRoutes = require('./routes/spells')

// express
const app = express()

// middleware
app.use(express.static('frontend/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/Auth', require('./Auth/Route'))

// routes
app.use('/api/inventory', inventoryRoutes)
app.use('/api/gp', gpRoutes)
app.use('/api/spells', spellsRoutes)

require('dotenv').config({path: './config/.env'})

connectDB()