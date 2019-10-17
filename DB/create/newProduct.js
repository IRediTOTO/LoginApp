
var mongoose = require('mongoose');

var User = require('../models/productsModel');


function newProduct(req,res,next){
    var Mee = new User({
      _id: new mongoose.Types.ObjectId(),
      productName: req.body.productName,
      productBrand:req.body.productBrand,
      productPrice:parseInt(req.body.productPrice),
      productImage: req.file.filename
    });
    Mee.save((err)=>{
      if(err) throw err;
      console.log("created a new product");
    })
}

module.exports=newProduct;