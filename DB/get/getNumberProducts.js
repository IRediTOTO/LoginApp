var mongoose=require('mongoose');
var User= require('../models/productsModel');


function getManyUser(req,res,next){
  User.find().sort('-_id').limit(parseInt(req.body.number)).exec((err,result)=>{
    if (err) throw err;
    res.json(result)
  })

}

module.exports=getManyUser;