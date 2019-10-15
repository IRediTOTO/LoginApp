var mongoose=require('mongoose');
var User= require('../models/usersModel');


function getAnUser(email){
  mongoose.connect('mongodb://localhost:27017/Project1',{
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err)=>{
  if(err) throw err;
  console.log("connected, ready to get an user :)");
  User.find({
    email:email
  }).exec((err,result)=>{
    if (err) throw err;
    return result;
    
  })
})
}
module.exports=getAnUser;