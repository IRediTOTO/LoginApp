var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var newUser=require('../DB/create/newUser');
var getManyUser=require('../DB/get/getManyUser');
var updateUser=require('../DB/update/updateUser');
var deleteUser=require('../DB/delete/deleteUser');



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



//trang login
router.get('/signin',(req,res,next)=>{
  res.render('./pages/signin');

})
router.get('/login',(req,res,next)=>{
  res.render('./pages/signin')
})








module.exports = router;
