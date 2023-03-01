const express = require('express')
// const { Db } = require('mongodb')
const app = express()
const connectDB = require('./config/database')
const MongoClient = require('mongodb').MongoClient

// const mainRoutes = require('./routes/main')
// const inventoryRoutes = require('./routes/inventory')
// const spellsRoutes = require('./routes/spells')

require('dotenv').config({path: './config/.env'})

connectDB()

app.use(express.static('frontend/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use('/', mainRoutes)
// app.use('/inventory', inventoryRoutes)
// app.use('/spells', spellsRoutes)

app.get('/api/getItems', async (req, res) => {
   const inventoryItems = await db.collection('inventory').find().toArray()
   res.json(inventoryItems)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})


// app.get('/', (request, response) => {
//     db.collection('inventory').find().toArray()
//     .then(data => {
//         response.render('index.ejs', { info: data })
//     })
//     .catch(error => console.error(error))
// })

// app.post('/addItem', (request, response) => {
//     db.collection('inventory').insertOne({itemName: request.body.itemName, itemQty: 1})
//     .then(result => {
//         console.log('Item added')
//         response.redirect('/')
//     })
//     .catch(error => console.error(error))
// })

// app.put('/increaseQty', (request, response) => {
//     db.collection('inventory').updateOne({})
// })
