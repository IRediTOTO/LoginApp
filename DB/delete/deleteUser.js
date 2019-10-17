var mongoose=require('mongoose');
var User= require('../models/usersModel');


async function deleteUser(req,res,next){
 await  User.findByIdAndDelete({_id:req.body.id}).exec((err,result)=>{
if(err) throw err;
console.log(result)
  res.send("deleted")
  })

}

module.exports=deleteUser;