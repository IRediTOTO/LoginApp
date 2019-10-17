var mongoose = require('mongoose');
var Product = require('../models/productsModel');


async function updateProduct(req, res, next) {
  await Product.findByIdAndUpdate({ _id: req.body.id }, {
    $set: {
      productName:req.body.productName,
      productBrand: req.body.productBrand,
      productPrice: req.body.productPrice

    }
  }).exec((err, result) => {
    if (err) throw err;
    console.log(result)

    res.send(result)
  })
}

module.exports = updateProduct;