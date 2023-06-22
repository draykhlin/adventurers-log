const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
   username: {
      type: String,
      unique: true,
      required: true,
   },
   password: {
      type: String,
      minlength: 4,
      required: true,
   },
})

module.exports = Mongoose.model("user", UserSchema)
