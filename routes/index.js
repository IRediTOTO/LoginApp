var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var newUser=require('../DB/create/newUser');
var getManyUser=require('../DB/get/getManyUser');
var updateUser=require('../DB/update/updateUser');
var deleteUser=require('../DB/delete/deleteUser');
var newProduct=require('../DB/create/newProduct');
var getManyProduct=require('../DB/get/getManyProduct');
var updateProduct=require('../DB/update/updateProduct');
// var deleteProduct=require('../DB/delete/deleteProduct');



var multer  = require('multer')
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('productImage');

function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

const ejs = require('ejs');
const path = require('path');




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('./pages/index', { title: 'Express' });
});
router.get('/test', (req, res, next) => {
  res.send("did it :)")
})




//trang admin
router.get('/admin',(req,res,next)=>{
  res.render('./pages/dashboard')
})
router.post('/createUser',newUser)
router.post('/getManyUser',getManyUser);
router.put('/UserEdit',updateUser)
router.delete('/UserEdit',deleteUser)

router.post('/createProduct',(req, res,next) => {
  upload(req, res, (err) => {
    if(err){
      throw err;
    } else {
      if(req.file == undefined){
        next()
      } else {
        next()
      }
    }
  });
},newProduct);
router.post('/getManyProduct',getManyProduct);
router.put('/ProductEdit',(req,res,next)=>{
  upload(req, res, (err) => {
    console.log(req.file)
    if(err){
      throw err;
    } else {
      if(req.file == undefined){
        next()
      } else {
        next()
      }
    }
  });
},updateProduct)
router.post('/upload',(req,res,next)=>{
  upload(req, res, (err) => {
    if(err){
      throw err;
    } else {
      if(req.file == undefined){
        next()
      } else {
        next()
      }
    }
  });
})










//trang login
router.get('/signin',(req,res,next)=>{
  res.render('./pages/signin');
})
router.get('/login',(req,res,next)=>{
  res.render('./pages/signin')
})

// trang product
// router.post('/api/',req)








module.exports = router;
