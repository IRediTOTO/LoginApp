var mongoose=require('mongoose');
var User= require('../models/usersModel');


function deleteUser(req,res,next){
    
  mongoose.connect('mongodb://localhost:27017/Project1',{
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err)=>{
  if(err) throw err;
  console.log("connected, ready to delete an user :)");

  User.findByIdAndDelete({_id:req.body.id}).exec((err,result)=>{
if(err) throw err;
console.log(result)
    
  res.send("deleted")
  })
})
}

module.exports=deleteUser;