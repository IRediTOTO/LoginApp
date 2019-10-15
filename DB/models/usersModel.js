var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    firstName: {
      type: String,
      required: true
    },
    lastName: String
  },
  password: { type: String },
  email: { type: String },
  role: { type: Number }
})

var User = mongoose.model('User', userSchema);
module.exports =  User
