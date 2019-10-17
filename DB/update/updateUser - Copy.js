var mongoose=require('mongoose');
var User= require('../models/usersModel');


function updateUser(req,res,next){
    
  mongoose.connect('mongodb://localhost:27017/Project1',{
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err)=>{
  if(err) throw err;
  console.log("connected, ready to delete an user :)");

  User.findByIdAndUpdate({_id:req.body.id},{$set:{name:{
    firstName:req.body.firstName,
    lastName:req.body.lastName
  },
  password:req.body.password,
  email:req.body.email,
  role:req.body.role

  }}).exec((err,result)=>{
if(err) throw err;
console.log(result)
    
  res.send(result)
  })
})
}

module.exports=updateUser;