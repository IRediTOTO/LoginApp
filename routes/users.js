var express = require('express');
var router = express.Router();
var apiuser = require('../public/javascripts/apiUser');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getAll', apiuser.getAll);
router.get('/getId/:id',apiuser.getId);
router.put('/putuser/:id',apiuser.updateUser);
router.post('/postuser',apiuser.postUser);
router.delete('/delete/:id',apiuser.deleteUser);
module.exports = router;
