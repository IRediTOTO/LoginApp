var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Project1',{
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err)=>{
  if(err) throw err;
  
})
var feedBackSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productID: { type: String },
  feedBackContent: {type: String}
})

var feedBack = mongoose.model('Feedback', feedBackSchema);
module.exports =  feedBack
