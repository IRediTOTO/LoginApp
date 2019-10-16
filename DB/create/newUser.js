
var mongoose = require('mongoose');

var User = require('../models/usersModel');


function newUser(req,res,next){
  mongoose.connect('mongodb://localhost:27017/Project1',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (err) throw err;
    console.log("connect ok, ready to create new user :)");
    var Mee = new User({
      _id: new mongoose.Types.ObjectId(),
      name: {
        firstName:req.body.firstName,
        lastName:req.body.lastName
      },
      password:req.body.password,
      email:req.body.email,
      role: 1
    });
    Mee.save((err)=>{
      if(err) throw err;
      console.log("created a new user");
    })
  })
}

module.exports=newUser;