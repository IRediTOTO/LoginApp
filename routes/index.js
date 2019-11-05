var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var  passport = require("passport")
var jwt = require('jsonwebtoken');


var newUser=require('../DB/create/newUser');
var getManyUser=require('../DB/get/getManyUser');
var updateUser=require('../DB/update/updateUser');
var deleteUser=require('../DB/delete/deleteUser');
var newProduct=require('../DB/create/newProduct');
var getManyProduct=require('../DB/get/getManyProduct');
var updateProduct=require('../DB/update/updateProduct');
// var deleteProduct=require('../DB/delete/deleteProduct');
var getNumberProducts=require('../DB/get/getNumberProducts');
var newFeedback=require('../DB/create/newFeedback')


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
  //User
  var getCookieJWT = function(req, res, next){
    try {
      var data = jwt.verify(req.cookies['jwt'], 'your_jwt_secret')
      if(data) {
        next()
      }
    } catch (error) {
      
      res.redirect('/login')
    }
  }
router.get('/admin',getCookieJWT,(req,res,next)=>{
  res.render('./pages/dashboard')
})
router.post('/createUser',newUser)
router.post('/getManyUser',getManyUser);
router.put('/UserEdit',updateUser)
router.delete('/UserEdit',deleteUser)

  //Product
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
router.post('/getManyProduct', getManyProduct);
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


const initPassportLocal = require("../config/controler/passport/local")

initPassportLocal();
//trang login
router.get('/login',(req,res,next)=>{
  res.render('./pages/signin');
})


router.post('/login', function (req, res, next) {

  passport.authenticate('local', {session: false}, (err, user, info) => {
      console.log(err);
      if (err || !user) {
          return res.status(400).json({
              message: info ? info.message : 'Login failed',
              user   : user
          });
      }

      req.login(user, {session: false}, (err) => {
          if (err) {
              res.send(err);
          }
          const token = jwt.sign(user ,'your_jwt_secret');
          return res.json({token:token,something:"Helu"});
      });
  })
  (req, res);

});















// API cho trang product
router.post('/api',getNumberProducts);
router.post('/api/:numpage',getManyProduct)


//API cho feedback
router.post('/newfeedback',newFeedback)








module.exports = router;
