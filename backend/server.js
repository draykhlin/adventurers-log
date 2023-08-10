const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
require('dotenv').config({path: './config/.env'})
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
// const connectDB = require('./config/database')

app.use(cors({
  origin: ['https://adventurerslogapp.onrender.com', 'https://www.dnd5eapi.co/api/spells'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
}))

app.options('*', cors())

const authRoutes = require('./routes/auth')
const inventoryRoutes = require('./routes/inventory')
const gpRoutes = require('./routes/gp')
const spellsRoutes = require('./routes/spells')

// sessions
app.use(
  session({
    secret: 'keyboard cat',
    // secret: env.get("SESSION_SECRET"),
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI
    }),
    cookie: {
      sameSite: 'none', 
      secure: true,
    }
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Passport config
require('./config/passport')(passport)

// middleware
app.use(express.static('frontend/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use('/api/Auth', require('./Auth/Route'))

app.use(flash())

// routes
app.use('/api/auth', authRoutes)
app.use('/api/inventory', inventoryRoutes)
app.use('/api/gp', gpRoutes)
app.use('/api/spells', spellsRoutes)

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://adventurerslogapp.onrender.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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