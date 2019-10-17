var mongoose=require('mongoose');
var Product= require('../models/productsModel');


async function getManyProduct(req,res,next){
  await Product.find().sort('-_id').limit(parseInt(req.body.number)).exec((err,result)=>{
    if (err) throw err;
    res.json(result)
  })

}

module.exports=getManyProduct;