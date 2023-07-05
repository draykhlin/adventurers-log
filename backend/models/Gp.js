const mongoose = require('mongoose')

const GpSchema = new mongoose.Schema({
    currency: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        default: 0,
    },
    userId: {
        type: String,
        required: true
    }
})

// document.save((error) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('Document saved successfully');
//     }
//   });

module.exports = mongoose.model('Gp', GpSchema)