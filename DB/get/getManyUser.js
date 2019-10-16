var mongoose=require('mongoose');
var User= require('../models/usersModel');


function getManyUser(req,res,next){
  mongoose.connect('mongodb://localhost:27017/Project1',{
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err)=>{
  if(err) throw err;
  console.log("connected, ready to get many user :)");
  User.find().sort('-_id').limit(parseInt(req.body.number)).exec((err,result)=>{
    if (err) throw err;
    res.json(result)
  })
})
}

module.exports=getManyUser;