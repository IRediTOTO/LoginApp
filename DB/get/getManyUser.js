var mongoose=require('mongoose');
var User= require('../models/usersModel');


 async function getManyUser(req,res,next){
  
  await User.find().sort('-_id').limit(15).exec((err,result)=>{
    if (err) throw err;console.log("2")
    res.json(result) 
  })
}

module.exports=getManyUser;