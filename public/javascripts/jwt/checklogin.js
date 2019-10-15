let jwt = require('jsonwebtoken');

var loadjwt = (res,req,next)=>{
    let email = req.body.email
    let pass = req.body.pass
    if(username && password){
        if(userId.length){
            var token = jwt.sign({ username,password }, 'shhhhh',{ expiresIn: 60 * 60 });
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
    }else{
        res.status(400).json({
            succsess:false,
            message:'Authentication failed! Please check the request'
        });
    }
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
