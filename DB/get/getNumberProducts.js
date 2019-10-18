var mongoose=require('mongoose');
var Product= require('../models/productsModel');


function getNumberProducts(req,res,next){
  Product.countDocuments().exec((err,result)=>{
    if (err) throw err;
    res.json(result) 
  });
}

module.exports=getNumberProducts; 