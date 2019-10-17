var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Project1',{
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err)=>{
  if(err) throw err;
  
})
var productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productName: { type: String },
  productBrand: {type: String},
  productPrice: { type: Number},
  productImage: [{ type: String }]
})

var Product = mongoose.model('Product', productSchema);
module.exports =  Product
