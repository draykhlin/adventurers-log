const express = require('express')
const app = express()
const connectDB = require('./config/database')
// const mainRoutes = require('./routes/main')
// const inventoryRoutes = require('./routes/inventory')
// const spellsRoutes = require('./routes/spells')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', mainRoutes)
app.use('/inventory', inventoryRoutes)
app.use('/spells', spellsRoutes)


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running`)
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
