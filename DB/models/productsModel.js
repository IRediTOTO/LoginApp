var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  
  name: { type: String },
  brand: {type: String},
  price: { type: Number},
  image: [{ type: String }]
})

var Product = mongoose.model('Product', userSchema);
module.exports =  Product
