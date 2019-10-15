var Blog = require('../../config/connet');
//   var blogs = new Blog({UserEmail:'t@gmail.com',UserPassword:'123456',UserPhone:'123123123123',type:'1'});
//   blogs.save();
var getAll = (req, res, next) => {
    Blog.find().then(data => {
        res.json(data);
    })
}
var getId = (req, res, next) => {
    let id = req.params.id
        Blog.findById({ _id: id }).then(data => {
            res.json(data);
        });
}
var postUser = (req, res, next) => {
    let email = req.body.email
    let pass = req.body.pass
    let phone = req.body.phone
    if (email && pass && phone) {
        Blog.create({ UserEmail: email, UserPassword: pass, UserPhone: phone, type: null }, function (err, data) {
            res.status(200).json({
                success: true,
                message: 'Done users',
                data: data
            });
        });
    } else {
        res.status(403).json({
            success: false,
            message: 'You have not email,pass,phone',
        })
    }
}
var updateUser = (req, res, next) => {
    let id = req.params.id
    let email = req.body.email
    let phone = req.body.phone
    if (email && phone) {
        Blog.findByIdAndUpdate({ _id: id }, { $set: { UserEmail: email, UserPhone: phone } }, function (err, data) {
            res.status(200).json({
                success: true,
                message: 'You have not email and phone',
                data:data
            });
        });
    } else {
        res.status(403).json({
            success: false,
            message: 'You have not email and phone'
        });
    }
}
var deleteUser = (req, res, next) => {
    let id = req.params.id
    Blog.findByIdAndDelete({ _id: id }, function (err, data) {
        res.status(200).json({
            success: true,
            message: 'Done delete user',
            data: data
        });
    });
}
module.exports = {
    getAll,
    getId,
    updateUser,
    postUser,
    deleteUser
}