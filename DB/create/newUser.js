
var mongoose = require('mongoose');

var User = require('../models/usersModel');


function newUser(firstName1,lastName1,password1,email1){
  mongoose.connect('mongodb://localhost:27017/Project1',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (err) throw err;
    console.log("connect ok :)");
    var Mee = new User({
      _id: new mongoose.Types.ObjectId(),
      name: {
        firstName:firstName1,
        lastName:lastName1
      },
      password:password1,
      email:email1,
      role: 1
    });
    Mee.save((err)=>{
      if(err) throw err;
      console.log("created a new user");
    })
  })
}

module.exports=newUser;