var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productSKU: {type: String},
  name: { type: String },
  price: { type: String },
  image: { type: String }
})

var Product = mongoose.model('Product', userSchema);
module.exports =  Product
