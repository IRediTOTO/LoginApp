var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Project1',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
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
