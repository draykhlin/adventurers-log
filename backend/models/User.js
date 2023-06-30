const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
   email: {
      type: String,
      unique: true,
      required: true,
   },
   password: {
      type: String,
      // minlength: 4,
      required: true,
   },
   money: {
      type: Map,
      of: Number,
      default: {
        gp: 0,
        cp: 0,
        sp: 0,
        pp: 0
      }
   }
})


// Password hash middleware

UserSchema.pre('save', function save(next) {
   const user = this
   if (!user.isModified('password')) { return next() }
   bcrypt.genSalt(10, (err, salt) => {
     if (err) { return next(err) }
     bcrypt.hash(user.password, salt, (err, hash) => {
       if (err) { return next(err) }
       user.password = hash
       next()
     })
   })
 })



// UserSchema.pre('save', async function(next){
//   if(this.isModified('password'))
//   this.password = await bcrypt.hash(this.password, 10)
//   next()
// })




// Helper method for validating password

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
     cb(err, isMatch)
   })
 }


module.exports = mongoose.model("User", UserSchema)