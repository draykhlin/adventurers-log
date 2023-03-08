require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
// const mainRoutes = require('./routes/main')
const inventoryRoutes = require('./routes/inventory')

// express
const app = express()

// middleware
app.use(express.static('frontend/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
app.use('/api/inventory', inventoryRoutes)

// connect to DB
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





// app.get('/api/getItems', async (req, res) => {
//     const inventoryItems = await db.collection('inventory').find().toArray()
//     res.json(inventoryItems)
//  })

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
