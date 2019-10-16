var express = require('express');
var router = express.Router();
// var apiuser = require('../public/javascripts/apiUser');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.get('/getAll', apiuser.getAll);
module.exports = router;
