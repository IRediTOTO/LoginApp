var mongoose=require('mongoose');
var User= require('../models/usersModel');


function updateUser(req,res,next){
    
  mongoose.connect('mongodb://localhost:27017/Project1',{
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err)=>{
  if(err) throw err;
  console.log("connected, ready to update an user :)");
  User.findByIdAndUpdate({_id:req.body.id},{$set:{

  }})
})
}

module.exports=updateUser;