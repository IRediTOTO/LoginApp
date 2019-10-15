var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/Applogin', {useNewUrlParser: true,useUnifiedTopology: true});
var blogSchema = new Schema({
    UserEmail:  String,
    UserPassword: String,
    UserPhone:   String,
    type:  Number
  });
  var Blog = mongoose.model('Blog', blogSchema);
//   var blogs = new Blog({UserEmail:'t@gmail.com',UserPassword:'123456',UserPhone:'123123123123',type:'1'});
//   blogs.save();
module.exports = Blog;