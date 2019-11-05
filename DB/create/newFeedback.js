
var mongoose = require('mongoose');

var feedBack = require('../models/feedBack');


function newFeedback(req,res,next){
    var Mee = new feedBack({
      _id: new mongoose.Types.ObjectId(),
      productID: req.body.productID,
      feedBackContent:req.body.feedBackContent
    });
    Mee.save((err)=>{
      if(err) throw err;
      console.log("created a new feedback");
    })
}

module.exports=newFeedback;