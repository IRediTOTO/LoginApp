var Blog = require('../../config/connet');
//   var blogs = new Blog({UserEmail:'t@gmail.com',UserPassword:'123456',UserPhone:'123123123123',type:'1'});
//   blogs.save();
var getAll = (req,res,next)=>{
    Blog.find().then(data=>{
       res.json(data);
    })
}
module.exports = {
    getAll
}