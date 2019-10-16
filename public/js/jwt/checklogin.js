let jwt = require('jsonwebtoken');
let con = require('../../../config/connet');
var loadjwt = async(req,res,next)=>{
    let email = req.query.email
    let pass = req.query.pass
    let userId =  await con.findOne({UserEmail:email,UserPassword:pass}).exec();
        if(userId.UserEmail){
            var token = jwt.sign({userId} , 'shhhhh',{ expiresIn: 60 * 60 });
            return res.json({
                success: true,
                message: 'Authentication successful!',
                token: token,
              });
        }
          return res.status(403).json({
                success: false,
                message: 'Incorrect username or password'
            });
    }
var ckeckToken = (req,res,next) =>{
    var token = req.headers.token;
    if(token){
        jwt.verify(token,'shhhhh',(err,data)=>{
            if(err){
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                  })
            }else{
                req.data = data;
                next();
            };
        });
    }else{
        return res.json({
            success:false,
            message:'Auth token in not supplied',
        });
    };
};

module.exports = {
    loadjwt,
    ckeckToken
}