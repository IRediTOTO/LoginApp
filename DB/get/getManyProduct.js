var mongoose=require('mongoose');
var Product= require('../models/productsModel');


async function getManyProduct(req,res,next){

  
    var a=parseInt( req.body.skip)
  
  console.log("req.body.pinap"+req.body.skip)
  await Product.find().sort('-_id').skip(0).limit(15).exec((err,result)=>{
    if (err) throw err;
    res.json(result)
  })
}

module.exports=getManyProduct; 