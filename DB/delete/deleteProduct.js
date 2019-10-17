var mongoose = require('mongoose');
var Product = require('../models/productsModel');


async function deleteProduct(req, res, next) {
  await Product.findByIdAndDelete({ _id: req.body.id }).exec((err, result) => {
    if (err) throw err;
    console.log(result)
    res.send("deleted")
  })
}

module.exports = deleteProduct;