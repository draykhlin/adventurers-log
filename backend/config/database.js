const express = require('express')
const app = express()
const mongoose = require('mongoose')
// require('dotenv').config();

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         // useFindAndModify: false,
         // useCreateIndex: true
      })
      // app.listen(process.env.PORT, () => {
      //    console.log(`connected to DB & listening on port ${process.env.PORT}`)
      // })
      console.log(`MongoDB Connected: ${conn.connection.host}`)
   } catch (err) {
      console.error(err)
      process.exit(1)
   }
}

module.exports = connectDB


// mongoose.connect(process.env.MONGO_URI)
//  .then(() => {
//      // listen for requests
//      app.listen(process.env.PORT, () => {
//          console.log(`connected to DB & listening on port ${process.env.PORT}`)
//      })
//  })
//  .catch((err) => {
//      console.log(err)
//  })
// }