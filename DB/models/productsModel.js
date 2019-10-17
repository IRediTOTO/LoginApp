var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  
  productName: { type: String },
  productBrand: {type: String},
  productPrice: { type: Number},
  productImage: [{ type: String }]
})

var Product = mongoose.model('Product', productSchema);
module.exports =  Product
