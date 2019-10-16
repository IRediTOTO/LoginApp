var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var newUser=require('../DB/create/newUser');
var getManyUser=require('../DB/get/getManyUser');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('./pages/index', { title: 'Express' });
});
router.get('/test', (req, res, next) => {
  res.send("did it :)")
})
router.get('/admin',(req,res,next)=>{
  res.render('./pages/dashboard')
})
router.post('/createUser',(req,res,next)=>{
  newUser(req.body.firstName,req.body.lastName,req.body.email,req.body.password);
  res.send("got it, thanks")
})
router.post('/getManyUser',getManyUser);

router.get('/signin',(req,res,next)=>{
  res.render('./pages/signin');

})

router.put('/UserEdit',(req,res,next)=>{
  console.log(req.body.email);
  res.send("ok :)")
})

router.get('/login',(req,res,next)=>{
  res.render('./pages/signin')
})








module.exports = router;
