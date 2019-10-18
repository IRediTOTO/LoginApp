var mongoose=require('mongoose');
var Product= require('../models/productsModel');


async function getManyProduct(req,res,next){

  if(req.body.pinap!= undefined){
    var a=parseInt( req.body.number)
  }else{
    var a=parseInt( req.body.pinap)*15
  }
  console.log("req.body.pinap"+req.body.pinap)
  await Product.find().sort('-_id').limit(a).exec((err,result)=>{
    if (err) throw err;
    res.json(result)
  })
}

module.exports=getManyProduct; 